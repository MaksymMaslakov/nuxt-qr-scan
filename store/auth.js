import { encode } from 'js-base64'

export const state = () => ({
  jwt: null
})

export const mutations = {
  LOGIN_SUCCESS(state, data) {
    state.jwt = data
  },

  RESET_AUTH(state) {
    state.jwt = null
  }
}

export const actions = {
  login({ commit }, loginData) {
    try {
      const dataInBase64 = encode(loginData)
      commit('LOGIN_SUCCESS', dataInBase64)
      localStorage.setItem('jwt', dataInBase64)
      return dataInBase64
    } catch (e) {
      throw new Error(e)
    }
  },
  logout({ commit }) {
    commit('RESET_AUTH')
    localStorage.removeItem('jwt')
  }
}

export const getters = {}
