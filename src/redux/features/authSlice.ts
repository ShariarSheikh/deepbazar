import { Account } from '@/types/auth.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import Cookies from 'js-cookie';

//----------------------------------------------
interface InitialStateProps {
  accessToken: string;
  user: Account;
}

const initialState: InitialStateProps = {
  //@ts-ignore
  user: null,
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth slice',
  initialState,

  reducers: {
    setCredentials: (state, action: PayloadAction<InitialStateProps>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logout: state => {
      //@ts-ignore
      state.user = null;
      state.accessToken = '';
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.authSlice.user;
export const selectCurrentAccessToken = (state: RootState) =>
  state.authSlice.accessToken;
