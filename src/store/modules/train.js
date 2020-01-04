// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)
//
// export const store = new Vuex.Store({
//
// })

const state = {
  registrations: [],
  users: [
    { id: 1, name: 'Mi', registered: false },
    { id: 2, name: 'Ma', registered: false },
    { id: 3, name: 'Me', registered: false },
    { id: 4, name: 'Mo', registered: false },
    { id: 5, name: 'Mb', registered: false },
    { id: 6, name: 'Mc', registered: false },
  ]
}

const getters = {
  unregisteredUsers (state) {
    return state.users.filter(user => {
      return !user.registered
    })
  },
  registrations (state) {
    return state.registrations
  },
  totalRegistrations (state) {
    return state.registrations.length
  }
}

const mutations = {
  register (state, userId) {
    console.log('xxxx', state)
    const date = new Date()
    const user = state.users.find(user => {
      return user.id === userId
    })

    user.registered = true

    const registration = {
      userId: user.id,
      name: user.name,
      date: date.getMonth() + '/' + date.getDate()
    }

    state.registrations.push(registration)
  },
  unregister (state, payload) {
    const user = state.users.find(user => {
      return user.id === payload.userId
    })

    user.registered = false

    const registration = state.registrations.find(registration => {
      return registration.id === payload.userId
    })

    state.registrations.splice(state.registrations.indexOf(registration), 1)
  }
}

const actions = {
  register ({ commit }, userId) {
    setTimeout(() => {
      commit('register', userId)
    }, 0)
  },
  unregister ({ commit }, payload) {
    commit('unregister', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
