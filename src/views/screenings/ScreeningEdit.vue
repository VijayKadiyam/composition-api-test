<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Enter ship name"
            label-for="ship_name"
            class="mb-2"
          >
            <b-form-input
              id="ship_name"
              v-model="form.ship_name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter client name"
            label-for="client_name"
            class="mb-2"
          >
            <b-form-input
              id="client_name"
              v-model="form.client_name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter report number"
            label-for="report_number"
            class="mb-2"
          >
            <b-form-input
              id="report_number"
              v-model="form.report_number"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter date"
            label-for="date"
            class="mb-2"
          >
            <b-form-input
              id="date"
              v-model="form.date"
              type="date"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter link"
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
            {{ loading ? 'Loading... ' : 'Update Screening' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'ScreeningEdit',
  data: () => ({
    form: {
    },
    loading: false,
  }),
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const screening = await axios.get(`/screenings/${this.$route.params.screeningId}`)
      this.form = screening.data.data
    },
    async store() {
      try {
        this.loading = true
        const screening = await axios.patch(`/screenings/${this.$route.params.screeningId}`, this.form)
        this.form.id = screening.data.data.id
        await this.handleFileUpload()
        this.$router.push('/screenings')
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
    async handleFileUpload() {
      [this.attachment] = this.$refs.file.files
      const formData = new FormData()
      formData.append('screeningid', this.form.id)
      formData.append('attachment', this.attachment)
      await axios.post('upload_screening_attachment', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
    },
  },
}
</script>
