import axios from 'axios'
import FactoryService from '../../services/FactoryService'

const state = {
  courses: [],
  course: {
    name: '',
    description: ''
  },
  isLoadCourses: false
}

const getters = {
  courses: state => state.courses,
  course: state => state.course,
  isLoadCourses: state => state.isLoadCourses
}

const mutations = {
  getCoursesSuccess (state, payload) {
    state.isLoadCourses = true
  },
  getCoursesError (state, error) {
    state.isLoadCourses = false
  },
  getCourses (state, payload) {
    state.courses = payload
  },
  getCourse (state, payload) {
    state.course = payload
  }
}

const actions = {
  getCourses ({ commit }, payload) {
    FactoryService.request('CourseService').index().then((res) => {
      console.log('RES', res)
      commit('getCoursesSuccess', { contacts: res })
      commit('getCourses', res)
    }).catch((e) => {
      commit('getCoursesError', 'error:getCourses')
    })
  },
  getConversations ({ commit }, payload) {
    axios.get(`${apiUrl}/conversations`)
      .then(r => r.data)
      .then(res => {
        if (res.status) {
          commit('getConversationsSuccess', { conversations: res.data, userId: payload })
          return res
        } else {
          commit('getConversationsError', 'error:getConversations')
          return res
        }
      })
  },
  async createContact ({ commit }, payload) {
    const res = await FactoryService.request('ContactService').create(payload)
  },
  async getCourse ({ commit }, payload) {
    const course = await FactoryService.request('CourseService').show(payload.id, {})
    commit('getCourse', course)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
