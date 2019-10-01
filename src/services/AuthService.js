import BaseService from './BaseService'

export default {
  async login (params = {}) {
    const res = await BaseService.post(`/api/login`, params)
    return res.data
  },

  async register (params = {}) {
    const res = await BaseService.post(`/api/register`, params)
    return res.data
  },

  async forgetPass (params = {}) {
    const res = await BaseService.post(`/api/forgot-password`, params)
    return res.data
  },

  async resetPass (params = {}) {
    const res = await BaseService.post(`/api/reset-password`, params)
    return res.data
  },

  async changePass (params = {}) {
    const res = await BaseService.post(`/api/crazy-courses`, params)
    return res.data
  }
}
