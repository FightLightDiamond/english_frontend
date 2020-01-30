import Vue from 'vue'
import App from './App'

// BootstrapVue add
import BootstrapVue from 'bootstrap-vue'
// Router & Store add
import router from './router'
import { store } from './store'
// Multi Language Add
import en from './locales/en.json'
import es from './locales/es.json'
import VueI18n from 'vue-i18n'
import { defaultLocale, localeOptions, firebaseConfig } from '@/constants/config'
// Notification Component Add
import Notifications from '@/components/Common/Notification'
// Breadcrumb Component Add
import Breadcrumb from '@/components/Common/Breadcrumb'
// RefreshButton Component Add
import RefreshButton from '@/components/Common/RefreshButton'
// Colxx Component Add
import Colxx from '@/components/Common/Colxx'
// Perfect Scrollbar Add
import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import contentmenu from 'v-contextmenu'
import lineClamp from 'vue-line-clamp'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import VueScrollTo from 'vue-scrollto'
import firebase from 'firebase/app'
import 'firebase/auth'
// import AudioPlayer from '@liripeng/vue-audio-player'
import AudioRecorder from 'vue-audio-recorder'

import VuejsDialog from 'vuejs-dialog'
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js' // only needed in custom components

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css'

import Vuelidate from 'vuelidate'

import moment from 'moment'

// Tell Vue to install the plugin.
Vue.use(VuejsDialog)
// Vue.use(AudioPlayer)
Vue.use(AudioRecorder)

Vue.use(BootstrapVue)
Vue.use(VueI18n)
Vue.use(Vuelidate)

const messages = { en: en, es: es }
const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages
})

Vue.use(Notifications)
Vue.component('piaf-breadcrumb', Breadcrumb)
Vue.component('b-refresh-button', RefreshButton)
Vue.component('b-colxx', Colxx)
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar)
Vue.use(require('vue-shortkey'))
Vue.use(contentmenu)
Vue.use(lineClamp, { /* plugin options */})
Vue.use(VCalendar, {
  firstDayOfWeek: 2, // ...other defaults,
  formats: {
    title: 'MMM YY',
    weekdays: 'WW',
    navMonths: 'MMMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L'
  },
  datePickerShowDayPopover: false,
  popoverExpanded: true,
  popoverDirection: 'bottom'
})

Vue.use(VueScrollTo)
Vue.use(require('vue-shortkey'))

firebase.initializeApp(firebaseConfig)

Vue.use(require('vue-moment'))

Vue.prototype.moment = moment
Vue.use(require('v-validate'))

export default new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
