import BaseService from '../BaseService'

export default class CourseService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/crazy-courses`, params)
    console.log(res.data)
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/crazy-courses/${id}`, params)
    console.log(res.data)
    return res.data
  }
}
