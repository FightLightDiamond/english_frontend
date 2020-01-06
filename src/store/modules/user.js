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
      state.msgError = null
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
      commit('clearError')
      commit('setProcessing', true)

      try {
        let auth = Auth.passpost()
        auth.username = payload.email
        auth.password = payload.password

        const res = await FactoryService.request('AuthService').login(auth)

        localStorage.setItem('user', JSON.stringify(res))

        commit('setUser', res)
      } catch (e) {
        localStorage.removeItem('user')
        commit('setError', e.message)
        commit('setProcessing', false)
      }
    },
    async register({commit}, payload) {
        const res = await FactoryService.request('AuthService').register(payload)

        if(res.stats < 200 && res.status > 300) {

        } else {
          commit('setError', res.statusText)
          commit('setProcessing', false)
        }
    },
    signOut ({ commit }) {
          localStorage.removeItem('user')
          commit('setLogout')
    }
  }
}
