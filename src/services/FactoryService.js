import AuthService from './AuthService'
import BaseService from './API/BaseService'
import CourseService from './API/CourseService'
import CrazyService from './API/CrazyService'
import HistoryService from './API/HistoryService'
import RemindService from './API/RemindService'
import TestService from './API/TestService'

const requestMap = {
  AuthService,
  BaseService,
  CourseService,
  CrazyService,
  HistoryService,
  RemindService,
  TestService
}

export default class FactoryService {
  static request (classname, auth = 'user') {
    let RequestClass = requestMap[classname]

    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname)
    }

    return new RequestClass(auth)
  }
}
