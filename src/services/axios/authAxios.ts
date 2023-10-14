import { TokenManager } from '../token.service';
// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/prefer-default-export
const tokenManagerMNG = new TokenManager('MNG');
const tokenManagerRED = new TokenManager('RED');

export const TokenManagerInfo = {
  MNG: tokenManagerMNG,
  RED: tokenManagerMNG,
};

export const MNGauthServiceAxiosInstance = tokenManagerMNG.axiosInstance();
export const REDauthServiceAxiosInstance = tokenManagerRED.axiosInstance();
