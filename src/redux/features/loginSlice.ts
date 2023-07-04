import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

//----------------------------------------------
interface User {
  name: string;
  email: string;
  profileImg: string;
  tokens: {
    accessTokens: string;
  };
}
interface LoginState {
  isShowLogin: boolean;
  userData: {
    user: User;
    status: string;
    error: string;
  };
}
//----------------------------------------------
const user: User =
  typeof window !== 'undefined' && Cookies.get('user')
    ? JSON.parse(Cookies.get('user') || '')
    : {};

const initialState: LoginState = {
  isShowLogin: false,
  userData: {
    user: user,
    status: '',
    error: '',
  },
};

const loginSlice = createSlice({
  name: 'login slice',
  initialState,

  reducers: {
    showLoginHandler: state => {
      state.isShowLogin = !state.isShowLogin;
    },
  },
});

export const { showLoginHandler } = loginSlice.actions;
export default loginSlice.reducer;
