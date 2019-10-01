import BaseService from './BaseService'

export default {
  async index (params = {}) {
    const res = await BaseService.get(`/api/crazy-courses`, params)
    console.log(res.data);
    return res.data
  },

  async show (id, params = {}) {
    const res = await BaseService.get(`/api/crazy-courses/${id}`, params)
    console.log(res.data);
    return res.data
  }
}
