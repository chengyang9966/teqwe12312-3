import axios, { AxiosResponse } from 'axios';
import createHttpError from 'http-errors';

export class TokenManager {
  tokens = {};
  private providerInfo = {
    RED: {
      url: `${process.env.RED_AUTH_SERVICE_URL}/redCash/admin/auth/api/v1.0/service`,
      username: process.env.RED_AUTH_SERVICE_USERNAME,
      password: process.env.RED_AUTH_SERVICE_PASSWORD,
      baseURL: process.env.RED_AUTH_SERVICE_URL,
    },
    MNG: {
      url: `${process.env.MNG_AUTH_SERVICE_URL}/mng/admin/auth/api/v1.0/service`,
      username: process.env.MNG_AUTH_SERVICE_USERNAME,
      password: process.env.MNG_AUTH_SERVICE_PASSWORD,
      baseURL: process.env.MNG_AUTH_SERVICE_URL,
    },
  };
  private provider = '';

  constructor(provider: string) {
    this.tokens = {};
    this.provider = provider;
  }

  setToken(name: string, token: string) {
    this.tokens[this.provider] = {
      [name]: token,
    };
  }

  getToken(tokenName: string) {
    return this.tokens[this.provider][tokenName];
  }

  private getProviderInfo() {
    return this.providerInfo[this.provider];
  }

  async regenerateToken() {
    const providerInfo = this.getProviderInfo();
    const response = await axios
      .post(
        providerInfo.url,
        {
          username: providerInfo.username,
          password: providerInfo.password,
        },
        {
          headers: {
            'Accept-Encoding': 'identity',
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw createHttpError(err.response.status, { message: err.response.data.message });
      });
    this.setToken('accessToken', response.data.accessToken);
    this.setToken('refreshToken', response.data.refreshToken);
  }

  axiosInstance() {
    const instance = axios.create({
      baseURL: process.env.RED_AUTH_SERVICE_URL,
      headers: {
        'Accept-Encoding': 'identity',
        Authorization: `Bearer ${this.getToken('accessToken')}`,
        // Add other headers if needed
      },
    });

    instance.interceptors.response.use(
      (res: AxiosResponse) =>
        // process need to perform before return response
        res,
      async (err) => {
        const originalRequest = err.config;

        // eslint-disable-next-line no-underscore-dangle
        if (err.response?.data?.statusCode === 401 && !originalRequest._retry) {
          // eslint-disable-next-line no-underscore-dangle
          originalRequest._retry = true;
          await this.regenerateToken();
          axios.defaults.headers.common.Authorization = `Bearer ${this.getToken('accessToken')}`;
          return instance(originalRequest);
        }
        return Promise.reject(err);
      }
    );
    return instance;
  }
}
