import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export default instance;