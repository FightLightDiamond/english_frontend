import BaseService from '../BaseService'

export default class CrazyService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/admin/crazies`, params)
    console.log(res.data)
    return res.data
  }

  async create (params = {}) {
    const res = await this.post(`/api/v1/admin/crazies`, params)
    console.log(res.data)
    return res.data
  }

  async update (id, params = {}) {
    const res = await this.put(`/api/v1/admin/crazies/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/v1/admin/crazies/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async destroy (id) {
    const res = await this.delete(`/api/v1/admin/crazies/${id}`)
    console.log(res.data)
    return res.data
  }
}
