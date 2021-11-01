import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice/loginSlice";
//category list open action
import showCategorySlice from "./showCategorySlice/showCategorySlice";

export const store = configureStore({
  reducer: {
    showCategoryOpen: showCategorySlice,
    loginBox: loginSlice,
  },
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
