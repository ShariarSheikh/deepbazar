import { Environment } from '@/global.variables';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import favoriteCartSlice from './features/favoriteCartSlice';
import loginSlice from './features/loginSlice';
import ProductApi from './services/Product';

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
    cartSlice: cartSlice,
    favoriteCartSlice: favoriteCartSlice,

    //  API--------------------------------------
    [ProductApi.reducerPath]: ProductApi.reducer,
  },

  // Middleware----------------------------------
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ProductApi.middleware),
  devTools: Environment === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
