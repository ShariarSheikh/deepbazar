import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//login user
export const fetchNewProducts = createAsyncThunk(
  "products/fetchNewProducts",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios(
        process.env.NEXT_PUBLIC_VERCEL_UR_PRODUCT_NEW_PRODUCT
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// login slice
export const getNewProductsSlice = createSlice({
  name: "new products",
  initialState: {
    status: null,
    error: null,
    products: null,
  },

  reducers: {},
  extraReducers: {
    //data fetch
    [fetchNewProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchNewProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [fetchNewProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const getNewProducts = (state) => state.getNewProducts;

export default getNewProductsSlice.reducer;
