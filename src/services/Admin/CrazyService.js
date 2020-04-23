import BaseService from '../BaseService'

export default class CrazyService extends BaseService {
  async index (params = {}) {
    return await this.get(`/api/v1/admin/crazies`, params)
  }

  async create (params = {}) {
    return await this.post(`/api/v1/admin/crazies`, params)
  }

  async update (id, params = {}) {
    return await this.put(`/api/v1/admin/crazies/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/api/v1/admin/crazies/${id}`, params)
  }

  async destroy (id) {
    return await this.delete(`/api/v1/admin/crazies/${id}`)
  }
}
