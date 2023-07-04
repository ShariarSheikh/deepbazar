import { createSlice } from '@reduxjs/toolkit';

//----------------------------------------------
interface Items {
  id: number;
  title: string;
  image: string;
  price: number;
}

interface FavoriteCartState {
  isShowFavoriteCart: boolean;
  items: Items[];
}
//----------------------------------------------

const data: Items[] =
  typeof window !== 'undefined' && localStorage.getItem('fvCart')
    ? JSON.parse(localStorage.getItem('fvCart') || '')
    : [];

// MAIN
const initialState: FavoriteCartState = {
  isShowFavoriteCart: false,
  items: data,
};

const favoriteCartSlice = createSlice({
  name: 'favorite Cart slice',
  initialState,

  reducers: {
    showFavoriteCartHandler: state => {
      state.isShowFavoriteCart = !state.isShowFavoriteCart;
    },
    addToFavorite: (state, action) => {
      if (state.items.length > 0) {
        const isExits = state.items.find(i => i.id === action.payload.id);
        if (isExits) return undefined;

        state.items.push(action.payload);
        localStorage.setItem('fvCart', JSON.stringify(state.items));
        return undefined;
      }
      state.items.push(action.payload);
      localStorage.setItem('fvCart', JSON.stringify(state.items));
    },

    removeFavoriteItem: (state, action) => {
      const data: Items[] =
        typeof window !== 'undefined' && localStorage.getItem('fvCart')
          ? JSON.parse(localStorage.getItem('fvCart') || '')
          : [];

      const newItems = data.filter(itm => itm.id !== action.payload.id);
      state.items = newItems;
      localStorage.setItem('fvCart', JSON.stringify(state.items));
    },

    clearFVCart: state => {
      state.items = [];
      localStorage.setItem('fvCart', JSON.stringify(state.items));
    },
  },
});

export const {
  addToFavorite,
  removeFavoriteItem,
  clearFVCart,
  showFavoriteCartHandler,
} = favoriteCartSlice.actions;
export default favoriteCartSlice.reducer;
