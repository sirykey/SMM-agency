import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://185.20.226.95/smm/',
});
