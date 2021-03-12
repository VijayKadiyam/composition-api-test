<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Select Year"
            label-for="year"
            class="mb-2"
          >
            <v-select
              id="year"
              v-model="form.year"
              :dir="$store.state.appConfig.isRTL ? '' : 'ltr'"
              :options="years"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter record name"
            label-for="name"
            class="mb-2"
          >
            <b-form-input
              id="name"
              v-model="form.name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter record link"
            label-for="link"
            class="mb-2"
          >
            <b-form-input
              id="link"
              v-model="form.link"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Attachment"
            label-for="attachment"
            class="mb-2"
          >
            <a :href="mediaUrl + form.imagepath" target="_blank">{{ form.imagepath }}</a>
            <input type="file" id="file" name="file" ref="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" multiple>
          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          class="mt-50"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mr-1"
            @click="store"
          >
            {{ loading ? 'Loading... ' : 'Update Record' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'RecordEdit',
  data: () => ({
    form: {
    },
    loading: false,
    years: ['2016', '2017', '2018', '2019', '2020', '2021'],
  }),
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const record = await axios.get(`/records/${this.$route.params.recordId}`)
      this.form = record.data.data
    },
    async store() {
      try {
        this.loading = true
        const records = await axios.patch(`/records/${this.$route.params.recordId}`, this.form)
        this.form.id = records.data.data.id
        await this.handleFileUpload()
        this.$router.push('/records')
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
    async handleFileUpload() {
      [this.attachment] = this.$refs.file.files
      const formData = new FormData()
      formData.append('recordid', this.form.id)
      formData.append('attachment', this.attachment)
      await axios.post('upload_record_attachment', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
    },
  },
}
</script>
