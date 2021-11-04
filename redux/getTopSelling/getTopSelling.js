import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//login user
export const fetchTopSelling = createAsyncThunk(
  "products/fetchTopSelling",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios(
        process.env.NEXT_PUBLIC_VERCEL_UR_PRODUCT_TOP_SELLING
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// login slice
export const getTopSelling = createSlice({
  name: "top selling products",
  initialState: {
    status: null,
    error: null,
    products: null,
  },

  reducers: {},
  extraReducers: {
    //data fetch
    [fetchTopSelling.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchTopSelling.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [fetchTopSelling.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const getTopSellingProduct = (state) => state.getTopSellingProduct;

export default getTopSelling.reducer;
