export default {
  namespaced: true,
  state: {
    mediaURL: null,
    rowsPerPage: 20,
  },
  getters: {
    getMediaUrl(state) {
      return state.mediaURL
    },
    getRowsPerPage(state) {
      return state.rowsPerPage
    },
  },
  mutations: {
    SET_MEDIA_URL(state, data) {
      state.mediaURL = data
    },
  },
  actions: {
    setMediaUrl({ commit }, url) {
      commit('SET_MEDIA_URL', url)
    },
  },
}
