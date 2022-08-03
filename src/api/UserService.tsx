import User from '../interfaces/User';
import ApiService from './ApiService';

class UserService {
  registerUser(obj: User) {
    return ApiService.postReq('/api/user/create-user/', obj);
  }

  login(obj: User) {
    return ApiService.postReq('/api/user/login/', obj);
  }
}

export default new UserService();
