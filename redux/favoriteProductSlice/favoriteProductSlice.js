import { createSlice } from "@reduxjs/toolkit";

let data =
  typeof window !== "undefined" && localStorage.getItem("fvCart")
    ? JSON.parse(localStorage.getItem("fvCart"))
    : [];

const favoriteProductSlice = createSlice({
  name: "favorite cart state",
  initialState: {
    items: data,
    isOpen: false,
  },

  reducers: {
    addToFavorite: (state, action) => {
      if (state.items.length > 0) {
        const isExits = state.items.find((i) => i.id === action.payload.id);
        if (isExits) return undefined;

        state.items.push(action.payload);
        localStorage.setItem("fvCart", JSON.stringify(state.items));
        return undefined;
      }
      state.items.push(action.payload);
      localStorage.setItem("fvCart", JSON.stringify(state.items));
    },

    removeFavoriteItem: (state, action) => {
      const data =
        typeof window !== "undefined" && localStorage.getItem("fvCart")
          ? JSON.parse(localStorage.getItem("fvCart"))
          : [];

      const newItems = data.filter((itm) => itm.id !== action.payload.id);
      state.items = newItems;
      localStorage.setItem("fvCart", JSON.stringify(state.items));
    },

    clearFVCart: (state) => {
      state.items = [];
      localStorage.setItem("fvCart", JSON.stringify(state.items));
    },

    isFavoriteOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addToFavorite,
  removeFavoriteItem,
  clearFVCart,
  isFavoriteOpen,
} = favoriteProductSlice.actions;

export const getFavoriteCartState = (state) => state.getFavoriteCartState;

export default favoriteProductSlice.reducer;
