import axios from 'axios';

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VITE_URL_API;
