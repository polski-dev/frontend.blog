import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slice/search/store.slice.search";
import contentReducer from "./slice/content/store.slice.content";

export const store = configureStore({
  reducer: { search: searchReducer, content: contentReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
