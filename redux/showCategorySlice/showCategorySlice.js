import { createSlice } from "@reduxjs/toolkit";

export const showCategorySlice = createSlice({
  name: "Show Category",
  initialState: {
    open: false,
  },

  reducers: {
    showCategory: (state) => {
      state.open = true;
    },
    hideCategory: (state) => {
      state.open = false;
    },
  },
});

export const { showCategory, hideCategory } = showCategorySlice.actions;

export const showCategoryOpen = (state) =>
  state.showCategoryOpen.open;

export default showCategorySlice.reducer;
