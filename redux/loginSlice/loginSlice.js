import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

//login user
export const signUpUser = createAsyncThunk(
  "signup/signUpUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_VERCEL_UR_SIGN_UP,
        user
      );

      return response?.data?.token;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//login user process.env.NEXT_PUBLIC_VERCEL_UR_LOGIN
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

//fetch user data
export const userData = createAsyncThunk("user/userData", async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  };

  const response = await axios.get(
    process.env.NEXT_PUBLIC_VERCEL_UR_PROFILE,
    config
  );

  if (response?.data?.success) {
    const { data } = response?.data;

    Cookies.set("userName", data.user.name, { expires: 7 });
    Cookies.set("profileImg", data.user.profileImg, {
      expires: 7,
    });
    Cookies.set("uId", data.user.id, {
      expires: 7,
    });
  }

  return response?.data;
});

// img profile img
export const profileImgUpdate = createAsyncThunk(
  "profile img/profileImgUpdate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        process.env.NEXT_PUBLIC_VERCEL_UR_PROFILE_IMG,
        data
      );

      if (response?.data?.success) {
        Cookies.set("profileImg", response?.data?.updateImg?.profileImg, {
          expires: 7,
        });
        Cookies.set("imagesFileName", response?.data?.updateImg?.imagesFileName, {
          expires: 7,
        });
      }

      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// login slice
export const loginSlice = createSlice({
  name: "login box",
  initialState: {
    //login status
    open: false,
    status: "",
    error: "",
    //user status
    token: "",
    userStatus: "",
    userError: "",
    user: null,
    //upload profile img
    imgStatus: "",
    imgError: "",
  },

  reducers: {
    openLoginBox: (state) => {
      state.open = !state.open;
    },
  },
  extraReducers: {
    //login user
    [loginUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.token = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    //signup user
    [signUpUser.pending]: (state, action) => {
      state.status = "pending";
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.token = action.payload;
    },
    [signUpUser.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    //user fetch
    [userData.pending]: (state, action) => {
      state.userStatus = "pending";
    },
    [userData.fulfilled]: (state, action) => {
      state.userStatus = "success";
      state.user = action.payload;
    },
    [userData.rejected]: (state, action) => {
      state.userStatus = "rejected";
    },
    //upload profile image
    [profileImgUpdate.pending]: (state, action) => {
      state.imgStatus = "pending";
    },
    [profileImgUpdate.fulfilled]: (state, action) => {
      state.imgStatus = "success";
      state.profileImg = action.payload;
    },
    [profileImgUpdate.rejected]: (state, action) => {
      state.imgStatus = "rejected";
      state.imgError = action.payload;
    },
  },
});

export const { openLoginBox } = loginSlice.actions;

export const loginBox = (state) => state.loginBox;

export default loginSlice.reducer;
