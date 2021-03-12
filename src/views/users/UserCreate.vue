<template>
  <b-card
    class="blog-edit-wrapper"
  >
    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Employee Code"
            label-for="emp-code"
            class="mb-2"
          >
            <b-form-input
              id="emp-code"
              v-model="form.emp_code"
            />
            <small class="text-danger">{{ errors.emp_code }}</small>
          </b-form-group>
        </b-col>
        <b-col md="8">
        </b-col>
        <b-col md="4">
          <b-form-group
            label="First Name"
            label-for="first-name"
            class="mb-2"
          >
            <b-form-input
              id="first-name"
              v-model="form.first_name"
            />
            <small class="text-danger">{{ errors.first_name }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Middle Name"
            label-for="middle-name"
            class="mb-2"
          >
            <b-form-input
              id="middle-name"
              v-model="form.middle_name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Last Name"
            label-for="last-name"
            class="mb-2"
          >
            <b-form-input
              id="last-name"
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
            label="Phone"
            label-for="phone"
            class="mb-2"
          >
            <b-form-input
              id="phone"
              v-model="form.phone"
            />
            <small class="text-danger">{{ errors.phone }}</small>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Role"
            label-for="role"
            class="mb-2"
          >
            <v-select
              id="role"
              v-model="form.role_id"
              :dir="$store.state.appConfig.isRTL ? '' : 'ltr'"
              :options="statusRoles"
            />
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
            {{ loading ? 'Loading... ' : 'Save User' }}
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script type="text/javascript">
import vSelect from 'vue-select'
import axios from 'axios'

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      form: {
        phone_code: '+91',
        active: 1,
        role_id: '',
      },
      statusRoles: [
        { label: 'Select Role', code: '' },
      ],
      loading: false,
    }
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
          company_id: this.$route.params.organizationId,
        }
        await axios.post('/company_user', organizationPayload)
        this.$router.push(`/organizations/${this.organization.value}/users`)
        this.loading = false
      }
      catch (e) {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
