import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//login user
export const fetchCategoryList = createAsyncThunk(
  "products/fetchCategoryList",
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios(
        `${process.env.NEXT_PUBLIC_VERCEL_UR_GET_CATEGORY_PRODUCTS}${category}`
      );

      return response?.data?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCategorySlice = createSlice({
  name: "products category list",
  initialState: {
    status: null,
    error: null,
    products: null,
  },

  reducers: {},
  extraReducers: {
    //data fetch
    [fetchCategoryList.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchCategoryList.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [fetchCategoryList.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const getCategoryList = (state) => state.getCategoryList;

export default getCategorySlice.reducer;
