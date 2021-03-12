import axios from 'axios'
import store from '@/store'

store.subscribe(mutation => {
  switch (mutation.type) {
    case 'auth/SET_TOKEN':
      if (mutation.payload) {
        axios.defaults.headers.common.Authorization = `Bearer ${mutation.payload}`
        localStorage.setItem('token', mutation.payload)
      }
      else {
        axios.defaults.headers.common.Authorization = null
        localStorage.removeItem('token')
        break
      }
    case 'auth/SET_USER':
      if (mutation.payload) {
        const loggedInUser = Object.assign(mutation.payload)
        if (loggedInUser.id) {
          const loggedInUserCompanies = loggedInUser ? loggedInUser.companies : ''
          const loggedInUserCompaniesId = loggedInUserCompanies.length ? loggedInUserCompanies[0].id : ''
          axios.defaults.headers.common['company-id'] = loggedInUserCompaniesId 
        }
      } 
      else {
        axios.defaults.headers.common['company-id'] = null
      }
      break
    default:
  }
})