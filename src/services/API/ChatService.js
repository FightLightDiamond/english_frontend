import BaseService from '../BaseService'

export default class ChatService extends BaseService {
  async contacts (params = {}) {
    return await this.get(`/api/contacts`, params)
  }

  async conversation (id, params = {}) {
    return await this.get(`/api/conversation/${id}`, params)
  }
  async send (params) {
    return await this.post(`/api/conversation/send`, params)
  }
}
