<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Enter audit report type"
            label-for="type"
            class="mb-2"
          >
            <v-select
              id="type"
              v-model="form.report_type"
              :dir="$store.state.appConfig.isRTL ? '' : 'ltr'"
              :options="reportTypes"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter audit report year"
            label-for="year"
            class="mb-2"
          >
            <b-form-input
              id="year"
              v-model="form.year"
              type="number"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Enter audit report name"
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
            label="Enter audit report link"
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
            {{ loading ? 'Loading... ' : 'Update Audit Report' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'AuditReportEdit',
  data: () => ({
    form: {
    },
    loading: false,
    reportTypes: ['Internal Report', 'External Report'],
  }),
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const auditReport = await axios.get(`/audit_reports/${this.$route.params.auditReportId}`)
      this.form = auditReport.data.data
    },
    async store() {
      try {
        this.loading = true
        const auditReport = await axios.patch(`/audit_reports/${this.$route.params.auditReportId}`, this.form)
        this.form.id = auditReport.data.data.id
        await this.handleFileUpload()
        this.$router.push('/audit-reports')
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
    async handleFileUpload() {
      [this.attachment] = this.$refs.file.files
      const formData = new FormData()
      formData.append('reportid', this.form.id)
      formData.append('attachment', this.attachment)
      await axios.post('upload_audit_report_attachment', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
    },
  },
}
</script>
