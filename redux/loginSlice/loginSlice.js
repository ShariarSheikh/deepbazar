import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

//login user
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_VERCEL_UR_LOGIN,
        user
      );

      return response?.data?.token;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// login slice
const loginSlice = createSlice({
  name: "login box",
  initialState: {
    isBoxOpen: false,
    userData: {
      user: {},
      status: "",
      error: "",
    },
  },

  reducers: {
    openLoginBox: (state) => {
      state.isBoxOpen = !state.isBoxOpen;
    },
  },
  extraReducers: {
    //login user
    [loginUser.pending]: (state) => {
      state.userData.status = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.userData.status = "success";
      state.userData.user = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.userData.status = "rejected";
      state.userData.error = action.payload;
    },
  },
});

export const { openLoginBox } = loginSlice.actions;

export const loginState = (state) => state.loginState;

export default loginSlice.reducer;
