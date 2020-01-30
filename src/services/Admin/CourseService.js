import BaseService from '../BaseService'

export default class CourseService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/admin/crazy-courses`, params)
    console.log(res.data)
    return res.data
  }

  async create (params = {}) {
    const res = await this.post(`/api/v1/admin/crazy-courses`, params)
    console.log(res.data)
    return res.data
  }

  async update (id, params = {}) {
    const res = await this.post(`/api/v1/admin/crazy-courses/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/v1/admin/crazy-courses/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async destroy (id) {
    const res = await this.delete(`/api/v1/admin/crazy-courses/${id}`)
    console.log(res.data)
    return res.data
  }
}
