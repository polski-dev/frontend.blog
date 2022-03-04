import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.grade";

export const gradeSlice = createSlice({
  name: "grade",
  initialState,
  reducers: {
    addGrade: (state, action: any) => {
      state.data.id = action.payload.id;
      state.data.grade = action.payload.grade;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGrade } = gradeSlice.actions;
export default gradeSlice.reducer;
