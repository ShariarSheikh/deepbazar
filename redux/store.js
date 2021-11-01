import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice/loginSlice";
//category list open action
import showCategorySlice from "./showCategorySlice/showCategorySlice";

export const store = configureStore({
  reducer: {
    showCategoryOpen: showCategorySlice,
    loginBox: loginSlice,
  },
});



