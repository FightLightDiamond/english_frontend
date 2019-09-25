import axios from 'axios'
import Api from '../config/Api'

export default {
  async index (params = {}) {
    const res = await axios.get(`${Api.domain()}/api/crazy-courses`, params)
    return res.data.data
  },

  async show (id, params = {}) {
    const res = await axios.get(`${Api.domain()}/api/crazy-courses/${id}`, params)
    return res.data.data
  }
}
