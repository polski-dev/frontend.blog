import tag from "./slice/tag/store.slice.tag";
import { configureStore } from "@reduxjs/toolkit";
import comment from "./slice/comment/store.slice.comment";

export const store = configureStore({
  reducer: { tag, comment },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
