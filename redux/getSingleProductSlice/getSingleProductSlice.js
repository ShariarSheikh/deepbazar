import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//login user
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_VERCEL_UR_GET_SINGLE_PRODUCT}&category=${query?.category}&id=${query?.id}&name=${query?.name}`
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSingleProductSlice = createSlice({
  name: "single product",
  initialState: {
    status: null,
    error: null,
    products: null,
  },

  reducers: {},
  extraReducers: {
    //data fetch
    [fetchSingleProduct.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const getSingleProduct = (state) => state.getSingleProduct;

export default getSingleProductSlice.reducer;
