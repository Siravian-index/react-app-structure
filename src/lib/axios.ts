import Axios, { InternalAxiosRequestConfig } from 'axios';

import storage from '@/utils/storage';
import env from '@/config/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: env.VITE_BASE_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // const message = error.response?.data?.message || error.message;
    debugger
    if (error.data.status === 401) {
      // TODO: clear storages and move to login
    }
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });
    return Promise.reject(error);
  }
);
