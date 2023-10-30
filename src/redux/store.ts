import { Environment } from '@/global.variables';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './services';
import cartSlice from './features/cartSlice';
import favoriteCartSlice from './features/favoriteCartSlice';
import authSlice from './features/authSlice';
import alertSlice from './features/alertSlice';

export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    favoriteCartSlice: favoriteCartSlice,
    authSlice: authSlice,
    alertSlice: alertSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  // Middleware----------------------------------
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: Environment !== 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
