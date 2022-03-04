import { configureStore } from "@reduxjs/toolkit";
import tagReducer from "./slice/tag/store.slice.tag";
import gradeReducer from "./slice/grade/store.slice.grade";
import callbackUrl from "./slice/callbackUrl/store.slice.callbackUrl";

export const store = configureStore({
  reducer: { tag: tagReducer, grade: gradeReducer, callbackUrl: callbackUrl },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
