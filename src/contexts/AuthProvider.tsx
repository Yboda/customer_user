'use client';
import {useAuthStore} from '@/store/authStore';
import Apis from '@/apis';
import {useEffect} from 'react';
import Login from '@/components/auth/Login';

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const {actions, isInitialize, isAuthenticated} = useAuthStore(state => ({
    ...state,
  }));

  const initialize = async () => {
    const accessToken = await localStorage.getItem('AccessToken');
    const refreshToken = await localStorage.getItem('RefreshToken');

    if (accessToken && refreshToken) {
      const me = await Apis.AuthApi.me();

      if (me) {
        actions.initialize({isAuthenticated: true, user: {...me}});
        return;
      } else {
        actions.initialize({isAuthenticated: false, user: null});
        localStorage.removeItem('AccessToken');
        localStorage.removeItem('RefreshToken');
      }
    }
    actions.initialize({isAuthenticated: false, user: null});
    return;
  };

  useEffect(() => {
    initialize();
  }, []);
  return (
    <>{!isInitialize ? <div>loading...</div> : <>{!isAuthenticated ? <Login /> : <div>{children}</div>}</>}</>
  );
}
