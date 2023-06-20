import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { LoginSendData, RegisterSendData } from './types';

const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

  //ENDPOINTS---------------------------------------
  endpoints: builder => ({
    login: builder.query<any, LoginSendData>({
      query: loginData => ({
        url: '/login',
        body: loginData,
      }),
    }),

    register: builder.query<any, RegisterSendData>({
      query: registerData => ({
        url: '/register',
        body: registerData,
      }),
    }),
  }),
});

export default AuthApi;
// API HOOKS
export const { useLoginQuery, useRegisterQuery } = AuthApi;
