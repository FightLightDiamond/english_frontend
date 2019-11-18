import BaseService from '../BaseService'

export default class CourseService extends BaseService {
  async create (params = {}) {
    const res = await this.post(`/api/reminds`, params)
    console.log(res.data)
    return res.data
  }

  async index (id, params = {}) {
    const res = await this.get(`/api/reminds`, params)
    console.log(res.data)
    return res.data
  }
}
