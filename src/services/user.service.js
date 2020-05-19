import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/test/';


/* eslint class-methods-use-this: ["error", { "exceptMethods":
['getPublicContent', 'getUserPage', 'getModeratorPage', 'getAdminPage'] }] */
class UserService {
  getPublicContent() {
    return axios.get(`${API_URL}all`);
  }

  getUserPage() {
    return axios.get(`${API_URL}user`, { headers: authHeader() });
  }

  getModeratorPage() {
    return axios.get(`${API_URL}mod`, { headers: authHeader() });
  }

  getAdminPage() {
    return axios.get(`${API_URL}admin`, { headers: authHeader() });
  }
}

export default new UserService();
