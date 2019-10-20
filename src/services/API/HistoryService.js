import BaseService from './BaseService'

export default class HistoryService extends  BaseService {
  async listen (params = {}) {
    const res = await this.get(`/`, params)
    console.log(res.data);
    return res.data
  }

  async read (params = {}) {
    const res = await this.get(`/api/crazy-read-histories`, params)
    console.log(res);
    return res
  }

  async write (params = {}) {
    const res = await this.get(`/api/crazy-write-histories`, params)
    console.log(res.data);
    return res.data
  }

  async speak (params = {}) {
    const res = await this.get(`/api/test/crazy-write/${id}`, params)
    console.log(res.data);
    return res.data
  }
}
