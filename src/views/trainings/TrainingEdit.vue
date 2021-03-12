<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Enter training name"
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
            label="Enter training link"
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
            {{ loading ? 'Loading... ' : 'Update Training' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'TrainingEdit',
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
      const training = await axios.get(`/trainings/${this.$route.params.trainingId}`)
      this.form = training.data.data
    },
    async store() {
      try {
        this.loading = true
        const training = await axios.patch(`/trainings/${this.$route.params.trainingId}`, this.form)
        this.form.id = training.data.data.id
        await this.handleFileUpload()
        this.$router.push('/trainings')
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
    async handleFileUpload() {
      [this.attachment] = this.$refs.file.files
      const formData = new FormData()
      formData.append('trainingid', this.form.id)
      formData.append('attachment', this.attachment)
      await axios.post('upload_training_attachment', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
    },
  },
}
</script>
