import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "initialState/initialState.tag";

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    addTagHome: (state, action: any) => {
      state.home = action.payload.home;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTagHome } = tagSlice.actions;
export default tagSlice.reducer;
