import {createStore} from '@/store/createStore';

export interface IUser {
  authId: '1' | '2';
  id: number;
  name: string;
  username: string;
}

interface IAuthAction {
  initialize: (payload: Pick<IAuth, 'isAuthenticated' | 'user'>) => void;
  login: (payload: Pick<IAuth, 'user'>) => void;
  logout: () => void;
}

interface IAuth {
  isInitialize: boolean;
  isAuthenticated: boolean;
  user: IUser | null;
  actions: IAuthAction;
}

export const useAuthStore = createStore<IAuth>(set => ({
  isInitialize: false,
  isAuthenticated: false,
  user: null,
  actions: {
    // 스토리지에 저장된 로그인 정보 존재시 전달받아 store 저장
    initialize: payload => {
      const {user, isAuthenticated} = payload;

      set(state => ({
        isInitialize: true,
        isAuthenticated,
        user,
      }));
    },
    // 로그인 api 성공시 user정보 전달받아 store 저장
    login: payload => {
      const {user} = payload;

      set(state => ({
        ...state,
        isAuthenticated: true,
        user,
      }));
    },
    logout: () => {
      set(state => ({
        ...state,
        isAuthenticated: false,
        user: null,
      }));
    },
  },
}));
