import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import UserAccessApi from "../../services/access.services";

//login user
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await UserAccessApi.login(user.email, user.password);
      return data;
    } catch (error) {
      if (error.response) return rejectWithValue(error.response.data.error);
      rejectWithValue(error.error);
    }
  }
);

const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {};

// login slice
const loginSlice = createSlice({
  name: "login box",
  initialState: {
    isBoxOpen: false,
    userData: {
      user: user,
      status: "",
      error: "",
    },
  },

  reducers: {
    openLoginBox: (state) => {
      state.isBoxOpen = !state.isBoxOpen;
    },

    logout: (state) => {
      Cookies.remove("user");
      state.userData.user = {};
      state.userData.status = "";
      state.userData.error = "";
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

export const { openLoginBox, logout } = loginSlice.actions;

export const loginState = (state) => state.loginState;

export default loginSlice.reducer;
