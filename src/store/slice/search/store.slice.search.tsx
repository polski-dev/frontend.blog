import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./store.slice.search.initialState";

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchQuery: (state, action: any) => {
      state.query = action.payload.query;
      state.all.home.data = action.payload.all.data;
      state.all.home.meta.pagination = action.payload.all.data.pagination;
      state.article.home.data = action.payload.article.data;
      state.article.home.meta.pagination = action.payload.article.data.pagination;
      state.video.home.data = action.payload.video.data;
      state.video.home.meta.pagination = action.payload.video.data.pagination;
    },
    addNextFoundContentQuery: (state, action: any) => {
      state.all.home.data = [...state.all.home.data, ...action.payload.all.data];
      state.all.home.meta.pagination = state.all.home.meta.pagination;
      state.article.home.data = [...state.article.home.data, ...action.payload.article.data];
      state.article.home.meta.pagination = action.payload.article.data.pagination;
      state.video.home.data = [...state.video.home.data, ...action.payload.video.data];
      state.video.home.meta.pagination = action.payload.video.data.pagination;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchQuery, addNextFoundContentQuery } = searchSlice.actions;
export default searchSlice.reducer;
