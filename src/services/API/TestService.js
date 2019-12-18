import BaseService from '../BaseService'

export default class TestService extends BaseService {
  async listen (id, params = {}) {
    const res = await this.get(`/api/test/crazy-listen/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async reading (id, params = {}) {
    const res = await this.get(`/api/test/crazy-read/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async read (id, params = {}) {
    const res = await this.post(`/api/test/crazy-read/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async write (id, params = {}) {
    const res = await this.get(`/api/test/crazy-write/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async written (id, params = {}) {
    const res = await this.post(`/api/test/crazy-write/${id}`, params)
    console.log(res.data)
    return res.data
  }

  async speak (id, params = {}) {
    const res = await this.post(`/api/test/crazy-speak/${id}`, params)
    console.log(res.data)
    return res.data
  }
}
