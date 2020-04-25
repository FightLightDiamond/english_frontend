import FactoryService from '../../services/FactoryService'

const state = {
  lesson: {
    'title': '', 'intro': '', 'content': '', 'section_id': '', 'views': '',
    'last_view': '', 'created_by': '', 'updated_by': '', 'is_active': '', 'no': ''
  },
  lessons: [],
}

const getters = {
  lesson: state => state.lesson,
  lessons: state => state.lessons,
}

const mutations = {
  getLessons (state, payload) {
    state.lessons = payload
  },
  getLesson (state, payload) {
    state.lesson = payload
  },
  createLesson (state, payload) {
    state.lesson = payload
  },
  updateLesson (state, payload) {
    state.lesson = payload
  },
  destroyLesson (state, payload) {
    state.lesson = payload
  }
}

const actions = {
  async getLessons ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').index(payload)
    console.log(res)
    if(res.status >= 200 && res.status < 300)
    commit('getLessons', res.data)
  },
  async getLesson ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').show(payload)
    console.log(res);
    if(res.status >= 200 && res.status < 300)
    commit('getLesson', res.data)
  },
  async createLesson ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').create(payload)
    if(res.status >= 200 && res.status < 300)
    commit('createLesson', res.data)
  },
  async updateLesson ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').update(payload.id, payload)
    if(res.status >= 200 && res.status < 300)
    commit('updateLesson', res.data)
  },
  async destroyLesson ({ commit }, payload) {
    const res = await FactoryService.request('LessonService').destroy(payload.id)
    if(res.status >= 200 && res.status < 300)
    commit('destroyLesson', res.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
