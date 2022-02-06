import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type videoType = {
  videos: any[];
  pageActive: number;
  pages: number;
};

export type AllVideoState = {
  all: videoType;
  best: videoType;
  waitingRoom: videoType;
};

const initialState: AllVideoState = {
  all: { videos: [], pageActive: 0, pages: 0 },
  best: { videos: [], pageActive: 0, pages: 0 },
  waitingRoom: { videos: [], pageActive: 0, pages: 0 },
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideoBest: (state, action: any) => {
      state.best.videos = [...state.best.videos, ...action.payload.data];
      state.best.pageActive += 1;
    },
    addVideoAll: (state, action: any) => {
      state.all.videos = [...state.all.videos, ...action.payload.data];
      state.all.pageActive += 1;
    },
    addVideoWaitingRoom: (state, action: any) => {
      state.waitingRoom.videos = [...state.waitingRoom.videos, ...action.payload.data];
      state.waitingRoom.pageActive += 1;
    },
    countPageVideoBest: (state, action: any) => {
      state.best.pages = Math.ceil(action.payload.quantity / 10);
    },
    countPageVideoAll: (state, action: any) => {
      state.all.pages = Math.ceil(action.payload.quantity / 10);
    },
    countPageVideoWaitingRoom: (state, action: any) => {
      state.waitingRoom.pages = Math.ceil(action.payload.quantity / 10);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addVideoBest, addVideoAll, addVideoWaitingRoom, countPageVideoBest, countPageVideoAll, countPageVideoWaitingRoom } = videoSlice.actions;
export default videoSlice.reducer;
