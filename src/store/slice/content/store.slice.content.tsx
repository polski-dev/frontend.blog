import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./store.slice.content.initialState";

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addContentAllHome: (state, action: any) => {
      state.all.home.data = [...state.all.home.data, ...action.payload.all.data];
      state.all.home.meta.pagination = action.payload.all.meta.pagination;
      state.article.home.data = [...state.article.home.data, ...action.payload.article.data];
      state.article.home.meta.pagination = action.payload.article.meta.pagination;
      state.video.home.data = [...state.video.home.data, ...action.payload.video.data];
      state.video.home.meta.pagination = action.payload.video.meta.pagination;
    },
    addContentAllWaitingRoom: (state, action: any) => {
      state.all.waitingRoom.data = [...state.all.waitingRoom.data, ...action.payload.all.data];
      state.all.waitingRoom.meta.pagination = action.payload.all.meta.pagination;
      state.article.waitingRoom.data = [...state.article.waitingRoom.data, ...action.payload.article.data];
      state.article.waitingRoom.meta.pagination = action.payload.article.meta.pagination;
      state.video.waitingRoom.data = [...state.video.waitingRoom.data, ...action.payload.video.data];
      state.video.waitingRoom.meta.pagination = action.payload.video.meta.pagination;
    },
    addContentArticleHome: (state, action: any) => {
      state.article.home.data = [...state.article.home.data, ...action.payload.data];
      state.article.home.meta.pagination = action.payload.meta.pagination;
    },
    addContentArticleWaitingRoom: (state, action: any) => {
      state.article.waitingRoom.data = [...state.article.waitingRoom.data, ...action.payload.data];
      state.article.waitingRoom.meta.pagination = action.payload.meta.pagination;
    },
    addContentVideoHome: (state, action: any) => {
      state.video.home.data = [...state.video.home.data, ...action.payload.data];
      state.video.home.meta.pagination = action.payload.meta.pagination;
    },
    addContentVideoWaitingRoom: (state, action: any) => {
      state.video.waitingRoom.data = [...state.video.waitingRoom.data, ...action.payload.data];
      state.video.waitingRoom.meta.pagination = action.payload.meta.pagination;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContentAllHome, addContentAllWaitingRoom, addContentArticleHome, addContentArticleWaitingRoom, addContentVideoHome, addContentVideoWaitingRoom } = contentSlice.actions;
export default contentSlice.reducer;
