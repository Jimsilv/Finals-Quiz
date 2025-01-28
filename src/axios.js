// src/axios.js (or wherever your Axios instance is configured)
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/', // Update this with your backend URL
});

export default axiosInstance;
