<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Enter incident report name"
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
            label="Enter date"
            label-for="name"
            class="mb-2"
          >
            <b-form-input
              id="name"
              v-model="form.date"
              type="date"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter incident report link"
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
            {{ loading ? 'Loading... ' : 'Update Incident Report' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'IncidentReportEdit',
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
      const incidentReport = await axios.get(`/incident_reports/${this.$route.params.incidentReportId}`)
      this.form = incidentReport.data.data
    },
    async store() {
      try {
        this.loading = true
        const incidentReport = await axios.patch(`/incident_reports/${this.$route.params.incidentReportId}`, this.form)
        this.form.id = incidentReport.data.data.id
        await this.handleFileUpload()
        this.$router.push('/incident-reports')
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
    async handleFileUpload() {
      [this.attachment] = this.$refs.file.files
      const formData = new FormData()
      formData.append('incidentid', this.form.id)
      formData.append('attachment', this.attachment)
      await axios.post('upload_incident_report_attachment', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
    },
  },
}
</script>
