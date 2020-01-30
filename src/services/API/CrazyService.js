import BaseService from '../BaseService'

export default class CrazyService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/crazies`, params)
    console.log(res.data)
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/crazies/${id}`, params)
    console.log(res.data)
    return res.data
  }
}
