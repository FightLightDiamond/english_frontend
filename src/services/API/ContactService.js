import BaseService from '../BaseService'

export default class CourseService extends BaseService {
  async create (params = {}) {
    const res = await this.post(`/api/v1/contacts`, params)
    console.log(res.data)
    return res.data
  }
}
