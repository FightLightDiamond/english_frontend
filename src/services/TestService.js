import BaseService from './BaseService'

export default {
  async listen (id, params = {}) {
    const res = await BaseService.get(`/api/test/crazy-listen/${id}`, params)
    console.log(res.data);
    return res.data
  },

  async reading (id, params = {}) {
    const res = await BaseService.get(`/api/test/crazy-read/${id}`, params)
    console.log(res.data);
    return res.data
  },

  async read (id, params = {}) {
    const res = await BaseService.post(`/api/test/crazy-read/${id}`, params)
    console.log(res.data);
    return res.data
  },

  async write (id, params = {}) {
    const res = await BaseService.get(`/api/test/crazy-write/${id}`, params)
    console.log(res.data);
    return res.data
  },

  async written (id, params = {}) {
    const res = await BaseService.post(`/api/test/crazy-write/${id}`, params)
    console.log(res.data);
    return res.data
  }
}
