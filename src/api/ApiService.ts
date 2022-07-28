import axios, { AxiosInstance } from 'axios';
import { httpConfig } from './httpConfig';

class ApiService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create(httpConfig);
  }

  getReq(url: string) {
    return this.axios.get(url);
  }

  postReq(url: string, obj: any) {
    return this.axios.post(url, obj);
  }
}

export default new ApiService();
