import BaseService from './BaseService'

export default class HistoryService extends  BaseService {
  async listen (id, params = {}) {
    const res = await this.get(`/`, params)
    console.log(res.data);
    return res.data
  }

  async read (id, params = {}) {
    const res = await this.get(`/api/crazy-read-histories`, params)
    console.log(res.data);
    return res.data
  }

  async write (id, params = {}) {
    const res = await this.get(`/crazy-write-histories`, params)
    console.log(res.data);
    return res.data
  }

  async speak (id, params = {}) {
    const res = await this.get(`/api/test/crazy-write/${id}`, params)
    console.log(res.data);
    return res.data
  }
}
