import axios, { AxiosInstance } from 'axios';
import { httpConfig } from './httpConfig';

class ApiService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create(httpConfig);

  };

  getReq(url: string) {
    return this.axios.get(url);
  }

  async postReq(url: string, obj: any) {

    try {
      const response = await this.axios.post(url, obj);

      return response;
    } catch (e) {
      throw { errorCode: e.response.status, data: e.response.data };
    }
 
  }
}

export default new ApiService();
