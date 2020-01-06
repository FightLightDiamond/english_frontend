import axios from 'axios'
import FactoryService from '../../services/FactoryService'

const state = {
  isLoadContacts: false,
}

const getters = {
  isLoadContacts: state => state.isLoadContacts,
  isLoadConversations: state => state.isLoadConversations,
  error: state => state.error,
}

const mutations = {
  getContactsSuccess (state, payload) {
    state.isLoadContacts = true
  },
  getContactsSearchSuccess (state, payload) {
    state.contactsSearchResult = payload.contacts
  },
  getContactsError (state, error) {
    state.isLoadContacts = false
  },
  getConversationsSuccess (state, payload) {
    state.isLoadConversations = true
  },
  getConversationsError (state, error) {
    state.isLoadConversations = false
  }
}

const actions = {
  searchContacts ({ commit, state }, { userId, searchKey }) {
    if (searchKey.length > 0) {
      axios
        .get(`${apiUrl}/contacts?search=${searchKey}`)
        .then(r => r.data)
        .then(res => {
          if (res.status) {
            commit('getContactsSearchSuccess', { contacts: res.data, userId: userId })
          } else {
            commit('getContactsError', 'error:getContacts')
          }
        })
    } else {
      commit('getContactsSearchSuccess', { contacts: state.contacts, userId: userId })
    }
  },
  getContacts ({ commit }, userId) {
    axios
      .get(`${apiUrl}/contacts`)
      .then(r => r.data)
      .then(res => {
        if (res.status) {
          commit('getContactsSuccess', { contacts: res.data, userId: userId })
        } else {
          commit('getContactsError', 'error:getContacts')
        }
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