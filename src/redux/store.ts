import { Environment } from '@/global.variables';
import { configureStore } from '@reduxjs/toolkit';
import { api } from './services';
import cartSlice from './features/cartSlice';
import favoriteCartSlice from './features/favoriteCartSlice';
import loginSlice from './features/loginSlice';

export const store = configureStore({
  reducer: {
    cartSlice: cartSlice,
    favoriteCartSlice: favoriteCartSlice,
    loginSlice: loginSlice,
    [api.reducerPath]: api.reducer,
  },

  // Middleware----------------------------------
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: Environment === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
