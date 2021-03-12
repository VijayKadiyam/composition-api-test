/* eslint-disable */
import axios from 'axios'

export default {
  namespaced: true,
  state: {
    token: '',
    user: {},
    company: {},
  },
  getters: {
    authenticated (state) {
      return state.token ? true : false
    },
    user (state) {
      return state.user
    },
    company(state) {
      return state.company
    }
  },
  mutations: {
    SET_TOKEN (state, data) {
      state.token = data
    },
    SET_USER (state, data) {
      state.user = data
      let userCompanies = data ? data.companies : ''
      state.company = userCompanies.length ? userCompanies[0] : {}
    }
  },
  actions: {
    async logIn ({ dispatch }, credentails) {
      const response = await axios.post('/login', credentails)
      dispatch('attempt', response.data.token)
    },
    async attempt ({ state, commit }, token) {
      if(token)
        commit('SET_TOKEN', token)

      if(!state.token)
        return

      try {
        const response = await axios.get('/me')
        commit('SET_USER', response.data.data)
      } catch(e) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      } 
    },
    logOut ({ commit }) {
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
    }
  }
}