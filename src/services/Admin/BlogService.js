import BaseService from '../BaseService'

export default class BlogService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/admin/blogs`, params)
    console.log(res.data)
    return res.data
  }

  async create (params = {}) {
    const res = await this.post(`/api/v1/admin/blogs`, params)
    console.log(res.data)
    return res.data
  }

  async update (id, params = {}) {
    const res = await this.put(`/api/v1/admin/blogs/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/v1/admin/blogs/${id}`, params)
    console.log(res.data)
    return res.data
  }
}
