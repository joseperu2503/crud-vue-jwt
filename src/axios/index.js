import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

http.interceptors.request.use((request) => {
  request.headers['Authorization'] =
    'Bearer ' + JSON.parse(sessionStorage.getItem('token'));
  return request;
});

export default http;
