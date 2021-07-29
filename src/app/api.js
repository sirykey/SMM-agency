import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://185.20.226.95/smm/',
});
