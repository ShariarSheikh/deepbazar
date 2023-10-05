import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './utils';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: baseQueryWithReAuth,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: builder => ({}),
});
