import axios from 'axios'
import Api from '../config/Api'
import Vue from 'vue'

const domain = Api.domain()

export default class BaseService {
  constructor (auth = 'user') {
    if (auth) {
      this.setAuth(auth)
    }
  }

  setAuth (auth) {
    axios.interceptors.request.use(function (config) {
      const user = JSON.parse(localStorage.getItem(auth))

      if (user) {
        console.log(user.access_token)
        config.headers.Authorization = `Bearer ${user.access_token}`
      }

      return config
    })
  }

  async get (uri, params = {}) {
    try {
      console.log(domain + uri)
      const res = await axios.get(domain + uri, { params: params })
      return res.data
    } catch (e) {
      Vue.$notify('error',  'Error', e, { duration: 13000, permanent: false })
      throw e
    }
  }

  async post (uri, params = {}) {
    try {
      const res = await axios.post(domain + uri, params)
      return res.data
    } catch (e) {
      Vue.$notify('error',  'Error', e, { duration: 13000, permanent: false })
      throw e
    }
  }

  async put (uri, params = {}) {
    try {
      const res = await axios.put(domain + uri, params)
      return res.data
    } catch (e) {
      Vue.$notify('error',  'Error', e, { duration: 13000, permanent: false })
      throw e
    }
  }

  async path (uri, params = {}) {
    try {
      const res = await axios.patch(domain + uri, params)
      return res.data
    } catch (e) {
      Vue.$notify('error',  'Error', e, { duration: 13000, permanent: false })
      throw e
    }
  }

  async delete (uri, params = {}) {
    try {
      const res = await axios.delete(domain + uri, params)
      return res.data
    } catch (e) {
      Vue.$notify('error',  'Error', e, { duration: 13000, permanent: false })
      throw e
    }
  }

  url (uri) {
    return domain + uri
  }
}
