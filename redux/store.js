import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice/cartSlice";
import favoriteProductSlice from "./favoriteProductSlice/favoriteProductSlice";
import loginSlice from "./loginSlice/loginSlice";
import productApiSlice from "./productsApi/productApiSlice";
//category list open action
import showCategorySlice from "./showCategorySlice/showCategorySlice";

export const store = configureStore({
  reducer: {
    showCategoryOpen: showCategorySlice,
    loginState: loginSlice,

    //--------------------------------------- products api state
    getProductApiState: productApiSlice,

    //get cart data
    getCart: cartSlice,

    //favorite cart
    getFavoriteCartState: favoriteProductSlice,
  },
});
