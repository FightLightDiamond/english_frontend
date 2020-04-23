import BaseService from '../BaseService'

export default class DashboardService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/v1/admin/dashboard`, params)
    return res.data
  }
}
