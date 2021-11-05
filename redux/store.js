import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotals } from "./cartSlice/cartSlice";
import getCategorySlice from "./getCategoryListSlice/getCategorySlice";
import getNewProductsSlice from "./getNewProductsSlice/getNewProductsSlice";
import getProductsSlice from "./getProductsSlice/getProductsSlice";
import getSingleProductSlice from "./getSingleProductSlice/getSingleProductSlice";
import getTopSelling from "./getTopSelling/getTopSelling";
import loginSlice from "./loginSlice/loginSlice";
//category list open action
import showCategorySlice from "./showCategorySlice/showCategorySlice";

export const store = configureStore({
  reducer: {
    showCategoryOpen: showCategorySlice,
    loginBox: loginSlice,

    // products all product data
    getProducts: getProductsSlice,
    getTopSellingProduct: getTopSelling,
    getNewProducts: getNewProductsSlice,
    getCategoryList: getCategorySlice,
    getSingleProduct: getSingleProductSlice,

    //get cart data
    getCart: cartSlice,
  },
});

