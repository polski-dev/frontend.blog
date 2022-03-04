import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.callbackUrl";

export const callbackUrlSlice = createSlice({
  name: "callbackUrl",
  initialState,
  reducers: {
    addCallbackUrl: (state, action: any) => {
      state.data.callbackUrl = action.payload.callbackUrl;
      state.data.name = action.payload.name;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCallbackUrl } = callbackUrlSlice.actions;
export default callbackUrlSlice.reducer;
