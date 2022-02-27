import axios, { AxiosInstance } from 'axios';

export default class AxiosHelper {
  static instance: AxiosInstance;

  constructor() {
    // Create axios instance
    AxiosHelper.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    // Modify axios response
    AxiosHelper.instance.interceptors.response.use(response => response.data);
  }
}
