import FactoryService from '../../services/FactoryService'

const state = {
  index: [],
  show: {},
  create: {},
  update: {},
}

const getters = {
  index: state => state.index,
  show: state => state.show,
  create: state => state.create,
  update: state => state.update,
  destroy: state => state.destroy,
}

const mutations = {
  index (state, payload) {
    state.index = payload
  },
  show (state, payload) {
    state.show = payload
  },
  create (state, payload) {
    state.create = payload
  },
  update (state, payload) {
    state.update = payload
  },
  destroy (state, payload) {
    state.destroy = payload
  }
}

const actions = {
  async index ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').index(payload)
    commit('index', res)
  },
  async show ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').show(payload.id)
    commit('show', res)
  },
  async create ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').create(payload)
    commit('create', res)
  },
  async update ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').update(payload.id, payload)
    commit('update', res)
  },
  async destroy ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').destroy(payload.id)
    commit('destroy', res)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
