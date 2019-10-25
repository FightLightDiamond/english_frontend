import BaseService from '../BaseService'

export default class CrazyService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/admin/crazies`, params)
    console.log(res.data);
    return res.data
  }

  async show (id, params = {}) {
    const res = await this.get(`/api/v1/admin/crazies/${id}`, params)
    console.log(res.data);
    return res.data
  }
}
