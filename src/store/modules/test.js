import FactoryService from '../../services/FactoryService'

const state = {
  listen: {},
  read: {},
  write: {},
  speak: {}
}

const getters = {
  listen: state => state.listen,
  read: state => state.read,
  write: state => state.write,
  speak: state => state.speak
}

const mutations = {
  getListen (state, payload) {
    state.listen = payload
  },
  getRead (state, payload) {
    state.read = payload
  },
  getWrite (state, payload) {
    state.write = payload
  },
  getSpeak (state, payload) {
    state.speak = payload
  }
}

const actions = {
  async getListen ({ commit }, payload) {
    const res = await FactoryService.request('TestService').listen(payload.id)
    commit('getListen', res)
  },
  async getRead ({ commit }, payload) {
    const res = await FactoryService.request('TestService').reading(payload.id)
    commit('getRead', res)
  },
  async getWrite ({ commit }, payload) {
    const res = await FactoryService.request('TestService').write(payload.id)
    commit('getWrite', res)
  },
  async getSpeak ({ commit }, payload) {
    const res = await FactoryService.request('TestService').listen(payload.id)
    commit('getSpeak', res)
  },
  async submitRead ({ commit }, payload) {
    const res = await FactoryService.request('TestService').read(payload.id)
  },
  async submitWrite ({ commit }, payload) {
    const res = await FactoryService.request('TestService').written(payload.id)
  },
  async submitSpeak ({ commit }, payload) {
    const res = await FactoryService.request('TestService').speak(payload.id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
