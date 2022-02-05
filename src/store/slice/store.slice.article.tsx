import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ArticleType = {
  articles: any[];
  pageActive: number;
  pages: number;
};

export type AllArticleState = {
  best: ArticleType;
  waitingRoom: ArticleType;
};

const initialState: AllArticleState = {
  best: { articles: [], pageActive: 0, pages: 0 },
  waitingRoom: { articles: [], pageActive: 0, pages: 0 },
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticleBest: (state, action: any) => {
      state.best.articles = [...state.best.articles, ...action.payload.data];
      state.best.pageActive += 1;
    },
    countPageArticleBest: (state, action: any) => {
      state.best.pages = Math.ceil(action.payload.quantity / 10);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addArticleBest, countPageArticleBest } = articleSlice.actions;
export default articleSlice.reducer;
