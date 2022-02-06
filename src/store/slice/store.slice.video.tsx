import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type videoType = {
  videos: any[];
  pageActive: number;
  pages: number;
};

export type AllVideoState = {
  all: videoType;
  waitingRoom: videoType;
};

const initialState: AllVideoState = {
  all: { videos: [], pageActive: 0, pages: 0 },
  waitingRoom: { videos: [], pageActive: 0, pages: 0 },
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideoAll: (state, action: any) => {
      state.all.videos = [...state.all.videos, ...action.payload.data];
      state.all.pageActive += 1;
    },
    addVideoWaitingRoom: (state, action: any) => {
      state.waitingRoom.videos = [...state.waitingRoom.videos, ...action.payload.data];
      state.waitingRoom.pageActive += 1;
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
export const { addVideoAll, addVideoWaitingRoom, countPageVideoAll, countPageVideoWaitingRoom } = videoSlice.actions;
export default videoSlice.reducer;
