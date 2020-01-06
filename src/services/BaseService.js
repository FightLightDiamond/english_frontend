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
      this.errorMsg(e)
    }
  }

  async post (uri, params = {}) {
    try {
      const res = await axios.post(domain + uri, params)
      return res.data
    } catch (e) {
      this.errorMsg(e)
    }
  }

  async put (uri, params = {}) {
    try {
      const res = await axios.put(domain + uri, params)
      return res.data
    } catch (e) {
      this.errorMsg(e)
    }
  }

  async patch (uri, params = {}) {
    try {
      const res = await axios.patch(domain + uri, params)
      return res.data
    } catch (e) {
      this.errorMsg(e)
    }
  }

  async show (uri) {
    try {
      const res = await axios.get(domain + uri)
      return res.data
    } catch (e) {
      this.errorMsg(e)
    }
  }

  async delete (uri) {
    try {
      const res = await axios.delete(domain + uri)
      return res.data
    } catch (e) {
      this.errorMsg(e)
    }
  }

  url (uri) {
    return domain + uri
  }

  errorMsg (e) {
    console.log(e.response)
    let validationErrors = ''
    if (e.response.status === 422) {
      const errors = e.response.data.errors
      for (let key in errors) {
        validationErrors += errors[key] + '. '
      }
    }

    if (e.response.status === 500) {
      validationErrors = e.response.data.message
    }

    Vue.$notify('error', e.response.statusText, validationErrors, { duration: 1300, permanent: false })
  }
}
