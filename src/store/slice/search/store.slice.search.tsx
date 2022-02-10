import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./store.slice.search.initialState";

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addNewSearchQuery: (state, action: any) => {
      state.query = action.payload.query;
      state.all.data = action.payload.all.data;
      state.all.meta.pagination = action.payload.all.meta.pagination;
      state.article.data = action.payload.article.data;
      state.article.meta.pagination = action.payload.article.meta.pagination;
      state.video.data = action.payload.video.data;
      state.video.meta.pagination = action.payload.video.meta.pagination;
      state.user.data = action.payload.user.data;
      state.user.meta.pagination = action.payload.user.meta.pagination;
      state.tag.data = action.payload.tag.data;
      state.tag.meta.pagination = action.payload.tag.meta.pagination;
    },
    addSearchQuery: (state, action: any) => {
      state.all.data = [...state.all.data, ...action.payload.all.data];
      state.all.meta.pagination = state.all.meta.pagination;
      state.article.data = [...state.article.data, ...action.payload.article.data];
      state.article.meta.pagination = action.payload.article.data.pagination;
      state.video.data = [...state.video.data, ...action.payload.video.data];
      state.video.meta.pagination = action.payload.video.data.pagination;
      state.user.data = [...state.user.data, ...action.payload.user.data];
      state.user.meta.pagination = action.payload.user.data.pagination;
      state.tag.data = [...state.tag.data, ...action.payload.tag.data];
      state.tag.meta.pagination = action.payload.tag.data.pagination;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewSearchQuery, addSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
