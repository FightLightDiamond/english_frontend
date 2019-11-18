import BaseService from './BaseService'

export default class AuthService extends BaseService {
  async login (params = {}) {
    const res = await this.post(`/api/login`, params)
    return res.data
  }

  async register (params = {}) {
    const res = await this.post(`/api/register`, params)
    return res.data
  }

  async forgetPass (params = {}) {
    const res = await this.post(`/api/forgot-password`, params)
    return res.data
  }

  async resetPass (params = {}) {
    const res = await this.post(`/api/reset-password`, params)
    return res.data
  }

  async changePass (params = {}) {
    const res = await this.post(`/api/crazy-courses`, params)
    return res.data
  }
}
