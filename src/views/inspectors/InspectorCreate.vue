<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Emp Code"
            label-for="emp_code"
            class="mb-2"
          >
            <b-form-input
              id="emp_code"
              v-model="form.emp_code"
            />
            <small class="text-danger">{{ errors.emp_code }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Prefix"
            label-for="prefix"
            class="mb-2"
          >
            <v-select
              id="prefix"
              v-model="form.prefix"
              :dir="$store.state.appConfig.isRTL ? '' : 'ltr'"
              :reduce="prefixes => prefixes.code"
              :options="prefixes"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
        </b-col>
        <b-col md="4">
          <b-form-group
            label="First Name"
            label-for="first_name"
            class="mb-2"
          >
            <b-form-input
              id="first_name"
              v-model="form.first_name"
            />
            <small class="text-danger">{{ errors.first_name }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Middle Name"
            label-for="middle_name"
            class="mb-2"
          >
            <b-form-input
              id="middle_name"
              v-model="form.middle_name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Last Name"
            label-for="last_name"
            class="mb-2"
          >
            <b-form-input
              id="last_name"
              v-model="form.last_name"
            />
            <small class="text-danger">{{ errors.last_name }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Email"
            label-for="email"
            class="mb-2"
          >
            <b-form-input
              id="email"
              v-model="form.email"
            />
            <small class="text-danger">{{ errors.email }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Email 2"
            label-for="email_2"
            class="mb-2"
          >
            <b-form-input
              id="email_2"
              v-model="form.email_2"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Phone"
            label-for="phone"
            class="mb-2"
          >
            <b-form-input
              id="phone"
              v-model="form.phone"
              type="number"
            />
            <small class="text-danger">{{ errors.phone }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Phone 2"
            label-for="phone_2"
            class="mb-2"
          >
            <b-form-input
              id="phone_2"
              v-model="form.phone_2"
              type="number"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Landline"
            label-for="landline"
            class="mb-2"
          >
            <b-form-input
              id="landline"
              v-model="form.landline"
              type="number"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Gender"
            label-for="gender"
            class="mb-2"
          >
            <v-select
              id="gender"
              v-model="form.gender"
              :dir="$store.state.appConfig.isRTL ? '' : 'ltr'"
              :reduce="genders => genders.code"
              :options="genders"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Date of Birth"
            label-for="dob"
            class="mb-2"
          >
            <b-form-input
              id="dob"
              v-model="form.dob"
              type="date"
            />
            <small class="text-danger">{{ errors.dob }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Age (in Years)"
            label-for="age"
            class="mb-2"
          >
            <b-form-input
              id="age"
              v-model="form.age"
              type="number"
            />
            <small class="text-danger">{{ errors.age }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Marital Status"
            label-for="marital_status"
            class="mb-2"
          >
            <v-select
              id="marital_status"
              v-model="form.marital_status"
              :dir="$store.state.appConfig.isRTL ? '' : 'ltr'"
              :reduce="marital_statuses => marital_statuses.code"
              :options="marital_statuses"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Skype ID"
            label-for="skype_id"
            class="mb-2"
          >
            <b-form-input
              id="skype_id"
              v-model="form.skype_id"
              type="number"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Remarks"
            label-for="remarks"
            class="mb-2"
          >
            <b-form-input
              id="remarks"
              v-model="form.remarks"
              type="number"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Photo"
            label-for="attachment"
            class="mb-2"
          >
            <a :href="mediaUrl + form.attachment" target="_blank">{{ form.attachment }}</a>
            <input type="file" id="file" name="file" ref="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" multiple>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="CV/Resume"
            label-for="attachment"
            class="mb-2"
          >
            <a :href="mediaUrl + form.cv_path" target="_blank">{{ form.cv_path }}</a>
            <input type="file" id="file1" name="file1" ref="file1" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" multiple>
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
            {{ loading ? 'Loading... ' : 'Save Inspector' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'InspectorCreate',
  data: () => ({
    form: {
      prefix: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_code: '+91',
      phone_2_code: '+91',
      phone: '',
      gender: '',
      marital_status: '',
      active: 1,
      role_id: '',
      dob: '',
    },
    userid: '',
    loading: false,
    prefixes: ['Capt', 'Mr', 'Ms'],
    genders: ['Male', 'Female'],
    marital_statuses: ['Married', 'Unmarried', 'Divorced'],
  }),
  mounted() {
    this.form.role_id = 3
  },
  methods: {
    async store() {
      this.loading = true
      try {
        const admin = await axios.post('/users', this.form)
        this.userid = admin.data.data.id
        // Assign Role
        const rolePayload = {
          user_id: admin.data.data.id,
          role_id: this.form.role_id,
        }
        await axios.post('/role_user', rolePayload)
        // Assign Organization
        const organizationPayload = {
          user_id: admin.data.data.id,
          company_id: this.company.id,
        }
        await axios.post('/company_user', organizationPayload)
        await this.handleFileUpload()
        this.$router.push('/inspectors')
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
    async handleFileUpload() {
      [this.attachment] = this.$refs.file.files
      const formData = new FormData()
      formData.append('userid', this.form.id)
      formData.append('attachment', this.attachment)
      await axios.post('upload_user_photo', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
    },
  },
}
</script>
