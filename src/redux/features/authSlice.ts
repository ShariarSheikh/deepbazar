import { Account } from '@/types/auth.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { RootState } from '../store';

const refreshTokenLocal = Cookies.get('refreshToken') ?? '';
const accessTokenLocal = Cookies.get('accessToken') ?? '';

//----------------------------------------------
interface InitialStateProps {
  accessToken?: string;
  refreshToken?: string;
  user?: Account;
}

const initialState: InitialStateProps = {
  //@ts-ignore
  user: null,
  accessToken: accessTokenLocal,
  refreshToken: refreshTokenLocal,
};

const authSlice = createSlice({
  name: 'auth slice',
  initialState,

  reducers: {
    setCredentials: (state, action: PayloadAction<InitialStateProps>) => {
      const { user, accessToken, refreshToken } = action.payload;
      if (user?._id) state.user = user;
      if (accessToken) {
        state.accessToken = accessToken;
        Cookies.set('accessToken', accessToken);
      }
      if (refreshToken) {
        state.refreshToken = refreshToken;
        Cookies.set('refreshToken', refreshToken);
      }
    },

    logout: state => {
      //@ts-ignore
      state.user = null;
      state.accessToken = '';
      state.refreshToken = '';
      Cookies.remove('refreshToken');
      Cookies.remove('accessToken');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.authSlice.user;
export const selectCurrentAccessToken = (state: RootState) =>
  state.authSlice.accessToken;
