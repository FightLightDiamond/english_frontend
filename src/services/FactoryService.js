import AuthService from './AuthService'
import BaseService from './BaseService'
import CourseService from './CourseService'
import CrazyService from './CrazyService'
import HistoryService from './HistoryService'
import TestService from './TestService'

const requestMap = {
  AuthService,
  BaseService,
  CourseService,
  CrazyService,
  HistoryService,
  TestService
}

export default class FactoryService {
  static service (classname) {
    let RequestClass = requestMap[classname]

    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname)
    }

    return new RequestClass()
  }
}
