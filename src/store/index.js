import Vue from 'vue'
import Vuex from 'vuex'

import app from '../main'
import course from './modules/course'
import english from './modules/english'
import lesson from './modules/lesson'
import menu from './modules/menu'
import user from './modules/user'
import chat from './modules/chat'
import todo from './modules/todo'
import test from './modules/test'
import survey from './modules/survey'
import train from './modules/train'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  },
  getters: {

  },
  mutations: {
    changeLang (state, payload) {
      app.$i18n.locale = payload
      localStorage.setItem('currentLanguage', payload)
    }
  },
  actions: {
    setLang ({ commit }, payload) {
      commit('changeLang', payload)
    }
  },
  modules: {
    course,
    english,
    lesson,
    menu,
    user,
    chat,
    test,
    todo,
    train,
    survey
  }
})
