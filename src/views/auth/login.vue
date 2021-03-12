<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1">
          IADMIN
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
          >
            Welcome to IADMIN! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account and start the adventure
          </b-card-text>

          <!-- form -->
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent
          >
            <!-- email -->
            <b-form-group
              label="Email"
              label-for="login-email"
            >
              <b-form-input
                id="login-email"
                v-model="form.email"
                :state="errors.length > 0 ? false:null"
                name="login-email"
                placeholder="john@example.com"
              />
              <small class="text-danger">{{ errors.email }}</small>
            </b-form-group>

            <!-- forgot password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="login-password">Password</label>
                <b-link :to="{name:'auth-forgot-password-v2'}">
                  <small>Forgot Password?</small>
                </b-link>
              </div>
              <b-input-group
                class="input-group-merge"
                :class="errors.length > 0 ? 'is-invalid':null"
              >
                <b-form-input
                  id="login-password"
                  v-model="form.password"
                  :state="errors.length > 0 ? false:null"
                  class="form-control-merge"
                  :type="passwordFieldType"
                  name="login-password"
                  placeholder="············"
                />
                <b-input-group-append is-text>
                  <feather-icon
                    class="cursor-pointer"
                    :icon="passwordToggleIcon"
                    @click="togglePasswordVisibility"
                  />
                </b-input-group-append>
              </b-input-group>
              <small class="text-danger">{{ errors.password }}</small>
            </b-form-group>

            <!-- submit buttons -->
            <b-button
              type="submit"
              variant="primary"
              block
              @click="login"
            >
              {{ isLoading ? 'Loading...' : 'Sign in' }}
            </b-button>
          </b-form>

          <b-card-text class="text-center mt-2">
            <span>New on our platform? </span>
            <b-link :to="{name:'page-auth-register-v2'}">
              <span>&nbsp;Create an account</span>
            </b-link>
          </b-card-text>
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  mixins: [togglePasswordVisibility],
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      isLoading: false,
      sideImg: require('@/assets/images/pages/login-v2.svg'),
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    ...mapActions({
      logIn: 'auth/logIn',
    }),
    async login() {
      this.isLoading = true
      this.logIn(this.form)
        .then(() => {
          this.isLoading = false
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Logged in successfully',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
          this.$router.push('/')
        })
        .catch(() => {
          this.isLoading = false
        })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
