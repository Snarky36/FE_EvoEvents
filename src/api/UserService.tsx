import User from '../interfaces/User';
import ApiService from './ApiService';

class UserService {
  registerUser(obj: User) {
    return ApiService.postReq('/api/user/create-user/', obj);
  }
}

export default new UserService();
