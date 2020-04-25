import FactoryService from '../../services/FactoryService'

const state = {
  types: [
    { id: 1, name: 'True false' },
    { id: 2, name: 'Multiple choice' },
    { id: 3, name: 'Multiple choice, select answer' },
  ],
  statuses: [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Inactive' },
  ],
  levels: [
    { id: 1, name: 'Fresher' },
    { id: 2, name: 'Junior' },
    { id: 3, name: 'Senior' },
    { id: 4, name: 'Expert' },
  ],
  question: {
    time: 15,
    type: 2,
    status: 1,
    question: '',
    level: 1,
    replies: [
      { id: 1, reply: '-' },
      { id: 2, reply: '-' },
      { id: 3, reply: '-' },
      { id: 4, reply: '-' },
    ],
    answers: [],
  },
  questions: []
}

const getters = {
  types: state => state.types,
  statuses: state => state.statuses,
  question: state => state.question,
  questions: state => state.questions,
  levels: state => state.levels,
}

const mutations = {
  getQuestions (state, payload) {
    state.questions = payload
  },
  getQuestion (state, payload) {
    state.question = payload
  },
  createQuestion (state, payload) {
    state.question = payload
  },
  updateQuestion (state, payload) {
    state.question = payload
  },
  destroyQuestion (state, payload) {
    state.question = payload
  },
}

const actions = {
  async getQuestions ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').index(payload)
    if (res.status >= 200 && res.status < 300) commit('getQuestions', res.data)
  },
  async getQuestion ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').show(payload)
    if (res.status >= 200 && res.status < 300) commit('getQuestions', res.data)
  },
  async createQuestion ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').create(payload)
    if (res.status >= 200 && res.status < 300) commit('getQuestions', res.data)
  },
  async updateQuestion ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').update(payload)
    if (res.status >= 200 && res.status < 300) commit('getQuestions', res.data)
  },
  async destroyQuestion ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').destroy(payload)
    if (res.status >= 200 && res.status < 300) commit('getQuestions', res.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
