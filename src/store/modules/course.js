import axios from 'axios'
import FactoryService from '../../services/FactoryService'

const state = {
  isLoadCourses: false,
}

const getters = {
  isLoadCourses: state => state.isLoadCourses,
  isLoadConversations: state => state.isLoadConversations,
  error: state => state.error,
}

const mutations = {
  getCoursesSuccess (state, payload) {
    state.isLoadCourses = true
  },
  getCoursesSearchSuccess (state, payload) {
    state.contactsSearchResult = payload.contacts
  },
  getCoursesError (state, error) {
    state.isLoadCourses = false
  },
  getConversationsSuccess (state, payload) {
    state.isLoadConversations = true
  },
  getConversationsError (state, error) {
    state.isLoadConversations = false
  }
}

const actions = {
  getCourses ({ commit }, userId) {
    FactoryService.request('CourseService').index().then((res) => {
      commit('getCoursesSuccess', { contacts: res, userId: userId })
    }).catch((e) => {
      commit('getCoursesError', 'error:getCourses')
    })
  },
  getConversations ({ commit }, userId) {
    axios
      .get(`${apiUrl}/conversations`)
      .then(r => r.data)
      .then(res => {
        if (res.status) {
          commit('getConversationsSuccess', { conversations: res.data, userId: userId })
        } else {
          commit('getConversationsError', 'error:getConversations')
        }
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
