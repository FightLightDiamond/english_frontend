import BaseService from './BaseService'

export default class AuthService extends BaseService {
  async login (params = {}) {
    const res = await this.post(`/api/login`, params)
    return res
  }

  async register (params = {}) {
    const res = await this.post(`/api/register`, params)
    return res
  }

  async forgetPass (params = {}) {
    const res = await this.post(`/api/forgot-password`, params)
    return res
  }

  async resetPass (params = {}) {
    const res = await this.post(`/api/reset-password`, params)
    return res
  }

  async changePass (params = {}) {
    const res = await this.post(`/api/change-password`, params)
    return res
  }
}
