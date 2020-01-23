import { currentUser } from '@/constants/config'
import FactoryService from '../../services/FactoryService'
import Auth from '../../config/Auth'

export default {
  state: {
    currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    currentAdmin: localStorage.getItem('admin') != null ? JSON.parse(localStorage.getItem('admin')) : null,
    msgError: null,
    processing: false
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    msgError: state => state.msgError
  },
  mutations: {
    setUser (state, payload) {
      state.currentUser = payload
      state.processing = false
      state.msgError = null
    },
    setLogout (state) {
      state.currentUser = null
      state.processing = false
      state.msgError = null
    },
    setProcessing (state, payload) {
      state.processing = payload
    },
    setError (state, payload) {
      state.msgError = payload
      state.currentUser = null
      state.processing = false
    },
    clearError (state) {
      state.msgError = null
    }
  },
  actions: {
    async login ({ commit }, payload) {
      commit('setProcessing', true)

      let auth = Auth.passpost()
      auth.username = payload.email
      auth.password = payload.password

      const res = await FactoryService.request('AuthService').login(auth)
      console.log('FactoryService', res)
      if (!(res.status < 200 || res.status > 300)) {
        localStorage.setItem('user', JSON.stringify(res))
        commit('setUser', res)
        commit('clearError')
      } else {
        localStorage.removeItem('user')
        commit('setError', res.statusText)
      }

      commit('setProcessing', false)
    },
    async register ({ commit }, payload) {
      commit('setProcessing', true)
      const res = await FactoryService.request('AuthService').register(payload)

      if (!(res.status < 200 || res.status > 300)) {
        commit('clearError')
      } else {
        commit('setError', res.statusText)
      }

      commit('setProcessing', false)
    },
    async forgotPassword({commit}, payload) {
      commit('setProcessing', true)
      const res = await FactoryService.request('AuthService').forgetPass(payload)

      if (!(res.status < 200 || res.status > 300)) {
        commit('clearError')
      } else {
        commit('setError', res.statusText)
      }
      commit('setProcessing', false)

    },
    signOut ({ commit }) {
      localStorage.removeItem('user')
      commit('setLogout')
    }
  }
}
