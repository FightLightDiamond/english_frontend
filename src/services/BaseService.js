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
      return await axios.get(domain + uri, { params: params })
    } catch (e) {
      return this.errorMsg(e)
    }
  }

  async post (uri, params = {}) {
    try {
      return await axios.post(domain + uri, params)
    } catch (e) {
      return this.errorMsg(e)
    }
  }

  async put (uri, params = {}) {
    try {
      return await axios.put(domain + uri, params)
    } catch (e) {
      return this.errorMsg(e)
    }
  }

  async patch (uri, params = {}) {
    try {
      return await axios.patch(domain + uri, params)
    } catch (e) {
      return this.errorMsg(e)
    }
  }

  async show (uri) {
    try {
      return await axios.get(domain + uri)
    } catch (e) {
      return this.errorMsg(e)
    }
  }

  async delete (uri) {
    try {
      return await axios.delete(domain + uri)
    } catch (e) {
      return this.errorMsg(e)
    }
  }

  url (uri) {
    return domain + uri
  }

  errorMsg (e) {
    console.log(e)
    if (e.response === undefined) {
      e.status = 0
      e.statusText = e.message
      return { data: e }
    }

    let validationErrors = ''
    if (e.response.status === 422) {
      const errors = e.response.data.errors
      for (let key in errors) {
        validationErrors += errors[key] + '. '
      }
    }

    if (e.response.status !== 422) {
      validationErrors = e.response.data
    }

    Vue.$notify('error', e.response.statusText, validationErrors, { duration: 5000, permanent: false })

    return { data: e.response }
  }
}
