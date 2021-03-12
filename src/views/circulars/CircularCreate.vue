<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Select Month"
            label-for="month"
            class="mb-2"
          >
            <v-select
              id="month"
              v-model="form.month"
              :dir="$store.state.appConfig.isRTL ? '' : 'ltr'"
              :reduce="months => months.code"
              :options="months"
            />
          </b-form-group>
        </b-col>
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
            label="Enter circular name"
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
            label="Enter circular link"
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
            {{ loading ? 'Loading... ' : 'Save Circular' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'CircularCreate',
  data: () => ({
    form: {
    },
    loading: false,
    months: [
      { label: 'January', code: '1' },
      { label: 'February', code: '2' },
      { label: 'March', code: '3' },
      { label: 'April', code: '4' },
      { label: 'May', code: '5' },
      { label: 'June', code: '6' },
      { label: 'July', code: '7' },
      { label: 'August', code: '8' },
      { label: 'September', code: '9' },
      { label: 'October', code: '10' },
      { label: 'November', code: '11' },
      { label: 'December', code: '12' },
    ],
    years: ['2016', '2017', '2018', '2019', '2020', '2021'],
  }),
  methods: {
    async store() {
      try {
        this.loading = true
        const circular = await axios.post('/circulars', this.form)
        this.form.id = circular.data.data.id
        await this.handleFileUpload()
        this.$router.push('/circulars')
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
    async handleFileUpload() {
      [this.attachment] = this.$refs.file.files
      const formData = new FormData()
      formData.append('circularid', this.form.id)
      formData.append('attachment', this.attachment)
      await axios.post('upload_circular_attachment', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
    },
  },
}
</script>
