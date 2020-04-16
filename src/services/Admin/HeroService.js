import BaseService from '../BaseService'

export default class HeroService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/admin/heroes`, params)
    return res
  }

  async create (params = {}) {
    const res = await this.post(`/api/v1/admin/heroes`, params)
    return res
  }

  async update (id, params = {}) {
    const res = await this.post(`/api/v1/admin/heroes/${id}`, params)
    return res
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/v1/admin/heroes/${id}`, params)
    return res
  }

  async destroy (id) {
    const res = await this.delete(`/api/v1/admin/heroes/${id}`)
    return res
  }
}
