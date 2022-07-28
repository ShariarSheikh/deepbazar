import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from "../../services/product.services";

export const fetchAllProducts = createAsyncThunk(
  "get/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await ProductApi.allProducts();
      return data;
    } catch (error) {
      if (error.response) return rejectWithValue(error.response.data);
      rejectWithValue(error.message);
    }
  }
);

export const fetchProductByCategories = createAsyncThunk(
  "get/fetchProductByCategories",
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await ProductApi.getPdByCategory(category);
      return data;
    } catch (error) {
      if (error.response) return rejectWithValue(error.response.data);
      rejectWithValue(error.message);
    }
  }
);

export const fetchRelatedProducts = createAsyncThunk(
  "get/fetchRelatedProducts",
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await ProductApi.getRelatedProductByCategories(category);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchSingleProductByUrl = createAsyncThunk(
  "get/fetchSingleProductByUrl",
  async (url, { rejectWithValue }) => {
    try {
      const { data } = await ProductApi.getSinglePdByUrlLink(url);
      return data;
    } catch (error) {
      if (error.response) return rejectWithValue(error.response.data);
      rejectWithValue(error.message);
    }
  }
);

export const fetchTopSelling = createAsyncThunk(
  "get/fetchTopSelling",
  async (length = 0, { rejectWithValue }) => {
    try {
      const { data } = await ProductApi.getTopSellingByLength(length);
      return data;
    } catch (error) {
      if (error.response) return rejectWithValue(error.response.data);
      rejectWithValue(error.message);
    }
  }
);

export const fetchNewProducts = createAsyncThunk(
  "get/fetchNewProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await ProductApi.newProducts();

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productApiSlice = createSlice({
  name: "products api",
  initialState: {
    allProducts: {
      status: "",
      error: "",
      products: [],
    },
    pdByCategories: {
      status: "",
      error: "",
      products: [],
    },
    singlePdByUrl: {
      status: "",
      error: "",
      product: {},
    },

    relatedProducts: {
      status: "",
      error: "",
      products: [],
    },
    topSellingProducts: {
      status: "",
      error: "",
      products: [],
    },
    newProducts: {
      status: "",
      error: "",
      products: [],
    },
  },

  reducers: {},
  extraReducers: {
    //all product fetch-----------------------------------------------------|
    [fetchAllProducts.pending]: (state) => {
      state.allProducts.status = "pending";
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.allProducts.status = "success";
      state.allProducts.products = action.payload;
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.allProducts.status = "rejected";
      state.allProducts.error = action.payload;
    },
    //products by category fetch-----------------------------------------------------|
    [fetchProductByCategories.pending]: (state) => {
      state.pdByCategories.status = "pending";
    },
    [fetchProductByCategories.fulfilled]: (state, action) => {
      state.pdByCategories.status = "success";
      state.pdByCategories.products = action.payload;
    },
    [fetchProductByCategories.rejected]: (state, action) => {
      state.pdByCategories.status = "rejected";
      state.pdByCategories.error = action.payload;
    },

    //product by url fetch-----------------------------------------------------|
    [fetchSingleProductByUrl.pending]: (state) => {
      state.singlePdByUrl.status = "pending";
    },
    [fetchSingleProductByUrl.fulfilled]: (state, action) => {
      state.singlePdByUrl.status = "success";
      state.singlePdByUrl.product = action.payload;
    },
    [fetchSingleProductByUrl.rejected]: (state, action) => {
      state.singlePdByUrl.status = "rejected";
      state.singlePdByUrl.error = action.payload;
    },

    //related products by category fetch-----------------------------------------------------|
    [fetchRelatedProducts.pending]: (state) => {
      state.relatedProducts.status = "pending";
    },
    [fetchRelatedProducts.fulfilled]: (state, action) => {
      state.relatedProducts.status = "success";
      state.relatedProducts.products = action.payload;
    },
    [fetchRelatedProducts.rejected]: (state, action) => {
      state.relatedProducts.status = "rejected";
      state.relatedProducts.error = action.payload;
    },

    //top selling products fetch-----------------------------------------------------|
    [fetchTopSelling.pending]: (state) => {
      state.topSellingProducts.status = "pending";
    },
    [fetchTopSelling.fulfilled]: (state, action) => {
      state.topSellingProducts.status = "success";
      state.topSellingProducts.products = action.payload;
    },
    [fetchTopSelling.rejected]: (state, action) => {
      state.topSellingProducts.status = "rejected";
      state.topSellingProducts.error = action.payload;
    },

    //new products fetch-----------------------------------------------------|
    [fetchNewProducts.pending]: (state) => {
      state.newProducts.status = "pending";
    },
    [fetchNewProducts.fulfilled]: (state, action) => {
      state.newProducts.status = "success";
      state.newProducts.products = action.payload;
    },
    [fetchNewProducts.rejected]: (state, action) => {
      state.newProducts.status = "rejected";
      state.newProducts.error = action.payload;
    },
  },
});

export const getProductApiState = (state) => state.getProductApiState;

export default productApiSlice.reducer;
