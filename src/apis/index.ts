import axios from 'axios';
import {string} from 'yup';
import {CustomerApi} from '@/apis/customerApi';
import {AuthApi} from '@/apis/authApi';
import {ShareApi} from '@/apis/shareApi';

export const adminBaseUrl = `${process.env.NEXT_PUBLIC_ADMIN_URL}`;
export const userBaseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/user`;

export const instance = axios.create({
  baseURL: userBaseUrl,
  timeout: 180_000,
});

export interface ResponseType<T> {
  code: number;
  message: string;
  data: T;
}

const flag = '/apis';

export const request = {
  get: <T>(url: string, params?: any) => instance.get<T>(url, params).then(res => res.data),
  post: <T>(url: string, body: {}) => instance.post<T>(url, body).then(res => res.data),
  put: <T>(url: string, body: {}) => instance.put<T>(url, body).then(res => res.data),
  delete: <T>(url: string, params?: any) => instance.delete<T>(url, params).then(res => res.data),
};

const Apis = {
  AuthApi,
  CustomerApi,
  ShareApi,
};

export default Apis;
