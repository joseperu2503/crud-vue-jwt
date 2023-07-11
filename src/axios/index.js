import axios from 'axios';
import store from '../store/index.js';

// const tokenString = sessionStorage.getItem('token')
// const userToken = JSON.parse(tokenString)

const http = axios.create({
  baseURL: 'http://laravel-10-api-jwt-articles.test:8080/api',
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
