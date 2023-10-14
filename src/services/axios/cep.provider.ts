import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { TokenManagerInfo } from './authAxios';

const MNGTokenManagerInfo = TokenManagerInfo.MNG;

// eslint-disable-next-line import/prefer-default-export
export const MNGcepServiceAxiosInstance = axios.create({
  baseURL: process.env.CEP_SERVICE_URL,
});

MNGcepServiceAxiosInstance.interceptors.request.use(async (config) => {
  const token = MNGTokenManagerInfo.getToken('accessToken');

  if (config.headers && token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

MNGcepServiceAxiosInstance.interceptors.response.use(
  (res: AxiosResponse) =>
    // process need to perform before return response
    res,
  async (err: any) => {
    const originalRequest = err.config;

    // eslint-disable-next-line no-underscore-dangle
    if (err.response.data.statusCode === 401 && !originalRequest._retry) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      await MNGTokenManagerInfo.regenerateToken();
      axios.defaults.headers.common.Authorization = `Bearer ${MNGTokenManagerInfo.getToken(
        'accessToken'
      )}`;
      return MNGcepServiceAxiosInstance(originalRequest);
    }
    return Promise.reject(err);
  }
);

const REDTokenManagerInfo = TokenManagerInfo.RED;

// eslint-disable-next-line import/prefer-default-export
export const REDcepServiceAxiosInstance = axios.create({
  baseURL: process.env.CEP_SERVICE_URL,
});

MNGcepServiceAxiosInstance.interceptors.request.use(async (config) => {
  const token = REDTokenManagerInfo.getToken('accessToken');

  if (config.headers && token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

REDcepServiceAxiosInstance.interceptors.response.use(
  (res: AxiosResponse) =>
    // process need to perform before return response
    res,
  async (err: any) => {
    const originalRequest = err.config;

    // eslint-disable-next-line no-underscore-dangle
    if (err.response.data.statusCode === 401 && !originalRequest._retry) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      await REDTokenManagerInfo.regenerateToken();
      axios.defaults.headers.common.Authorization = `Bearer ${REDTokenManagerInfo.getToken(
        'accessToken'
      )}`;
      return REDcepServiceAxiosInstance(originalRequest);
    }
    return Promise.reject(err);
  }
);
