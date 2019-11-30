import adminService from './Admin/IndexService'
import userService from './API/IndexService'

const requestMap = {
  user: userService,
  admin: adminService
}

export default class FactoryService {
  static request (classname, auth = 'user') {
    let RequestClass = requestMap[auth][classname]

    console.log(RequestClass);
    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname)
    }

    return new RequestClass(auth)
  }
}
