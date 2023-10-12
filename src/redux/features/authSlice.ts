import { Account } from '@/types/auth.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { RootState } from '../store';

const refreshTokenCookiesName = 'depBazRft';
const accessTokenCookiesName = 'depBazAcT';

const refreshTokenLocal = Cookies.get(refreshTokenCookiesName) ?? '';
const accessTokenLocal = Cookies.get(accessTokenCookiesName) ?? '';

//----------------------------------------------
interface InitialStateProps {
  accessToken?: string;
  refreshToken?: string;
  user?: Account;
  isLoading?: boolean;
}

const initialState: InitialStateProps = {
  isLoading: false,
  user: {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    imgUrl: '',
    role: [],
    isCustomAccount: true,
    address: '',
    zipCode: 0,
    bio: '',
    socialLinks: {
      facebook: '',
      instagram: '',
      linkedin: '',
      twitter: '',
    },
  },
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
        Cookies.set(accessTokenCookiesName, accessToken);
      }
      if (refreshToken) {
        state.refreshToken = refreshToken;
        Cookies.set(refreshTokenCookiesName, refreshToken);
      }
    },

    setProfileLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    logout: state => {
      //@ts-ignore
      state.user = null;
      state.accessToken = '';
      state.refreshToken = '';
      Cookies.remove(refreshTokenCookiesName);
      Cookies.remove(accessTokenCookiesName);

      // store.dispatch(removeAlert());
    },
  },
});

export const { setCredentials, logout, setProfileLoading } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.authSlice.user;
export const selectCurrentAccessToken = (state: RootState) =>
  state.authSlice.accessToken;
