import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//login user
export const fetchProductsData = createAsyncThunk(
  "products/fetchProductsData",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios(
        process.env.NEXT_PUBLIC_VERCEL_UR_PRODUCT_ALL
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// login slice
export const getProductsSlice = createSlice({
  name: "products data",
  initialState: {
    status: null,
    error: null,
    products: null,
  },

  reducers: {},
  extraReducers: {
    //data fetch
    [fetchProductsData.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchProductsData.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [fetchProductsData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const getProducts = (state) => state.getProducts;

export default getProductsSlice.reducer;
