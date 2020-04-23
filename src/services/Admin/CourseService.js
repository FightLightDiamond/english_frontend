import BaseService from '../BaseService'

export default class CourseService extends BaseService {
  async index (params = {}) {
    return await this.get(`/api/v1/admin/crazy-courses`, params)
  }

  async create (params = {}) {
    return await this.post(`/api/v1/admin/crazy-courses`, params)
  }

  async update (id, params = {}) {
    return await this.post(`/api/v1/admin/crazy-courses/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/api/v1/admin/crazy-courses/${id}`, params)
  }

  async destroy (id) {
    return await this.delete(`/api/v1/admin/crazy-courses/${id}`)
  }
}
