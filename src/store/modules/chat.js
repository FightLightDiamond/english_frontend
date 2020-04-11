import FactoryService from '../../services/FactoryService'

const state = {
  isLoadContacts: false,
  isLoadConversations: false,
  error: '',
  contacts: null,
  contactsSearchResult: null,
  conversations: null
}

const getters = {
  isLoadContacts: state => state.isLoadContacts,
  isLoadConversations: state => state.isLoadConversations,
  error: state => state.error,
  contacts: state => state.contacts,
  conversations: state => state.conversations,
  contactsSearchResult: state => state.contactsSearchResult

}

const mutations = {
  getContactsSuccess (state, payload) {
    state.isLoadContacts = true
    state.contacts = payload.contacts
    state.contactsSearchResult = payload.contacts
  },
  getContactsSearchSuccess (state, payload) {
    state.contactsSearchResult = payload.contacts
  },
  getContactsError (state, error) {
    state.isLoadContacts = false
    state.error = error
  },
  getConversationsSuccess (state, payload) {
    state.isLoadConversations = true
    state.conversations = payload.conversations
  },
  getConversationsError (state, error) {
    state.isLoadConversations = false
    state.error = error
  }
}

const actions = {
  async searchContacts ({ commit, state }, { userId, searchKey }) {
    if (searchKey.length > 0) {
      const res = await FactoryService.request('ChatService').contacts()
      if (res.status) {
        commit('getContactsSearchSuccess', { contacts: res.data, userId: userId })
      } else {
        commit('getContactsError', 'error:getContacts')
      }
    } else {
      commit('getContactsSearchSuccess', { contacts: state.contacts, userId: userId })
    }
  },
  async getContacts ({ commit }, userId) {
    const res = await FactoryService.request('ChatService').contacts()

    if (res.status) {
      commit('getContactsSuccess', { contacts: res.data, userId: userId })
    } else {
      commit('getContactsError', 'error:getContacts')
    }
  },
  async getConversations ({ commit }, userId) {
    if (userId) {
      const res = await FactoryService.request('ChatService').conversation(userId)
      if (res.status) {
        commit('getConversationsSuccess', { conversations: res.data, userId: userId })
      } else {
        commit('getConversationsError', 'error:getConversations')
      }
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
