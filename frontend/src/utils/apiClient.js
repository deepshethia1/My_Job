import axios from 'axios';
import Config from '../utils/config';

const baseURL = Config.API_URL;

const apiClient = (isFormData = false) => {
  let headers = {
    'Access-Control-Allow-Origin': '*'
    // 'Access-Control-Request-Headers': 'origin, Content-Type, x-requested-with, accept'
  };

  let userdata = window.localStorage.getItem('user_data');

  if (userdata) {
    userdata = JSON.parse(userdata);
    headers = {
      ...headers,
      Authorization: `Bearer ${userdata.token}`,
      'Access-Control-Allow-Headers': 'origin,x-requested-with,content-type,accept'
    };
  }

  if (isFormData) {
    Object.assign(headers, { 'content-type': 'multipart/form-data' });
  }
  return axios.create({
    baseURL,
    withCredentials: false,
    headers
  });
};
export default apiClient;
