import firebase from 'firebase/app'
import 'firebase/auth'
import { currentUser } from '@/constants/config'
import FactoryService from '../../services/FactoryService'

export default {
  state: {
    currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
    currentAdmin: localStorage.getItem('admin') != null ? JSON.parse(localStorage.getItem('admin')) : null,
    loginError: null,
    processing: false
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError
  },
  mutations: {
    setUser (state, payload) {
      state.currentUser = payload
      state.processing = false
      state.loginError = null
    },
    setLogout (state) {
      state.currentUser = null
      state.processing = false
      state.loginError = null
    },
    setProcessing (state, payload) {
      state.processing = payload
      state.loginError = null
    },
    setError (state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    clearError (state) {
      state.loginError = null
    }
  },
  actions: {
    async login ({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)

      try {
        const res = await FactoryService.request('AuthService').login(payload)
        localStorage.setItem('user', JSON.stringify(res))
        commit('setUser', res)
      } catch (e) {
        localStorage.removeItem('user')
        commit('setError', e.message)
        this.processing = false
      }
    },
    async register({commit}, payload) {
      try {
        const res = await FactoryService.request('AuthService').register(payload)
        localStorage.setItem('user', JSON.stringify(res))
        commit('setUser', res)
      } catch (e) {
        localStorage.removeItem('user')
        commit('setError', e.message)
        this.processing = false
      }
    },
    signOut ({ commit }) {
          localStorage.removeItem('user')
          commit('setLogout')
    }
  }
}
