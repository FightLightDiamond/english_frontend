import BaseService from '../BaseService'

export default class UserService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/users`, params)
    return res.data
  }

  async create (params = {}) {
    const res = await this.post(`/api/v1/users`, params)
    return res.data
  }

  async update (id, params = {}) {
    const res = await this.post(`/api/v1/users/${id}`, params)
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/v1/users/${id}`, params)
    return res.data
  }

  async destroy (id) {
    const res = await this.delete(`/api/v1/users/${id}`)
    return res.data
  }
}
