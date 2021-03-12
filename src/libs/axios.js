import Vue from 'vue'
import store from '@/store'

// axios
import axios from 'axios'

// const baseURL = 'http://api.aethon.aaibuzz.com'
const baseURL = 'http://localhost:8080'
// const baseURL = 'http://192.168.0.120:8080'
// const baseURL = 'http://172.20.10.2:8080'
// const baseURL = 'http://192.168.0.123:8080'
axios.defaults.baseURL = `${baseURL}/api`
store.dispatch('settings/setMediaUrl', `${baseURL}/storage/`)

// // declare a request interceptor
axios.interceptors.request.use(config => {
  store.dispatch('errors/setErrors', {})
  store.dispatch('errors/setStatus', {})
  return config
}, error => Promise.reject(error))

// // declare a response interceptor
axios.interceptors.response.use(response => response, error => {
  const errors = error.response.data.errors
  /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: false}}] */
  Object.keys(errors).forEach(key => {
    errors[key] = errors[key][0]
  })
  store.dispatch('errors/setErrors', errors)
  store.dispatch('errors/setStatus', error.response.status)
  return Promise.reject(error)
})

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: `${baseURL}/api`,
  // timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

Vue.prototype.$http = axiosIns

export default axiosIns
