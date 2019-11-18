import BaseService from '../BaseService'

export default class Admin extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/admin/admins`, params)
    console.log(res.data)
    return res.data
  }

  async create (params = {}) {
    const res = await this.post(`/api/v1/admin/admins`, params)
    console.log(res.data)
    return res.data
  }

  async update (id, params = {}) {
    const res = await this.put(`/api/v1/admin/admins/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/v1/admin/admins/${id}`, params)
    console.log(res.data)
    return res.data
  }
}
