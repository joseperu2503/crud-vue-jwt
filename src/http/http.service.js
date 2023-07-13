import axios from 'axios';
import { useToken } from "@/composables/useToken";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const token = useToken()

http.interceptors.request.use((request) => {
  request.headers['Authorization'] = `Bearer ${token.getToken()}`
  return request;
});

export default http;
