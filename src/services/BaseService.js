import axios from 'axios'
import Api from '../config/Api'

const domain = Api.domain()

axios.interceptors.request.use(function (config) {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user) {
    console.log(user.access_token)
    config.headers.Authorization = `Bearer ${user.access_token}`
  }

  return config
})

export default class BaseService {
  async get (uri, params = {}) {
    console.log(domain + uri)
    const res = await axios.get(domain + uri, params)
    return res.data
  }

  async post (uri, params = {}) {
    const res = await axios.post(domain + uri, params)
    return res.data
  }

  async put (uri, params = {}) {
    const res = await axios.put(domain + uri, params)
    return res.data
  }

  async path (uri, params = {}) {
    const res = await axios.patch(domain + uri, params)
    return res.data
  }

  async delete (uri, params = {}) {
    const res = await axios.delete(domain + uri, params)
    return res.data
  }

  url (uri) {
    return domain + uri
  }
}
