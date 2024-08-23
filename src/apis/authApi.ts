import {request, ResponseType} from '@/apis/index';
import {IUser} from '@/store/authStore';
import CryptoJS from 'crypto-js';

const adminBaseUrl = `${process.env.NEXT_PUBLIC_ADMIN_URL}/admin`;
const userBaseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/user`;
let baseUrl = userBaseUrl;

export const AuthApi = {
  me: async (isAdmin = false) => {
    if (isAdmin) {
      baseUrl = adminBaseUrl;
    }
    try {
      const {code, data, message} = await request.get<ResponseType<IUser>>(`${baseUrl}/login/me`);
      console.log(code, data);
      if (code === 0) {
        return data;
      }
    } catch (e) {
      console.log('me Err', e);
    }
  },
  login: async ({username, password}: {username: string; password: string}, isAdmin = false) => {
    type tokens = {
      accessToken: string;
      refreshToken: string;
    };

    if (isAdmin) {
      baseUrl = adminBaseUrl;
    }

    const hashPassword = CryptoJS.SHA512(password).toString(CryptoJS.enc.Hex);

    try {
      const res = await request.post<ResponseType<tokens>>(`${baseUrl}/login`, {
        username,
        // password: hashPassword,
        password,
      });
      return res;
    } catch (e) {
      console.log('login Err', e);
      return null;
    }
  },
};
