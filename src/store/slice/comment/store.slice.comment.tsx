import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState.comment";
import { ArticeGetListCommentsType } from "database/article/database.artice.index";

export const articleCommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    commentsAddMore: (state, action: { payload: { comment: ArticeGetListCommentsType } }): void => {
      state.comment.meta = action.payload.comment.meta;
      state.comment.data = [...state.comment.data, ...action.payload.comment.data];
    },
    commentsAdd: (state, action: { payload: { id: number; type: string; comment: ArticeGetListCommentsType } }): void => {
      state.id = action.payload.id;
      state.type = action.payload.type;
      state.comment.meta = action.payload.comment.meta;
      state.comment.data = [...state.comment.data, ...action.payload.comment.data];
    },
  },
});

// Action creators are generated for each case reducer function
export const { commentsAddMore, commentsAdd } = articleCommentSlice.actions;
export default articleCommentSlice.reducer;
