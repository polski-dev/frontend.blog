import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./store.slice.tag.initialState";

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    addTag: (state, action: any) => {
      state.all.home.data = action.payload.all.data;
      state.all.home.meta.pagination = action.payload.all.data.pagination;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTag } = tagSlice.actions;
export default tagSlice.reducer;
