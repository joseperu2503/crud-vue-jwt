import axios from 'axios';
import { useToken } from "@/composables/useToken";
// import {router} from '../router'

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const {removeToken, getToken} = useToken()

http.interceptors.request.use((request) => {
  request.headers['Authorization'] = `Bearer ${getToken()}`
  return request;
});

// http.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       removeToken()
//       router.push('login')
//     }
//     return Promise.reject(error);
//   }
// );

export default http;
