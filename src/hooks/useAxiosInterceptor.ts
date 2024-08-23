'use client';
import axios, {AxiosError} from 'axios';
import {useEffect} from 'react';
import {instance} from '@/apis';
import {useAuthStore} from '@/store/authStore';
import {jwtDecode} from 'jwt-decode';

const AxiosInterceptor = ({children}: {children: React.ReactNode}) => {
  const {logout} = useAuthStore(state => state.actions);

  useEffect(() => {
    instance.interceptors.response.use(
      res => {
        const {headers} = res;

        // 토큰 refresh
        if (headers.accesstoken) {
          localStorage.setItem('AccessToken', headers.Accesstoken);
          localStorage.setItem('RefreshToken', headers.Refreshtoken);
        }

        return res;
      },
      (error: AxiosError) => {
        if (axios.isAxiosError(error)) {
          const {data, status, config} = error.response!;

          switch (status) {
            case 400:
              console.error(data);
              break;
            case 401:
              console.error('unAuth');
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              logout();
              break;
            case 403:
              console.debug('noAuth');
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              logout();
              break;
            case 404:
              throw new Error('404 not found');
            case 500:
              throw new Error('500 Server Error');
          }
          return Promise.reject(error);
        }
      },
    );

    instance.interceptors.request.use(
      config => {
        const accessToken = localStorage.getItem('AccessToken');
        const refreshToken = localStorage.getItem('RefreshToken');

        if (accessToken && refreshToken) {
          config.headers!.AccessToken = accessToken;
          config.headers!.RefreshToken = refreshToken;
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }, []);

  return children;
};

export {AxiosInterceptor};
