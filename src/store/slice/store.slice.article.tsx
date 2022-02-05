import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ArticleType = {
  articles: any[];
  page: number;
  quantity: number;
};

export type AllArticleState = {
  best: ArticleType;
  waitingRoom: ArticleType;
};

const initialState: AllArticleState = {
  best: { articles: [], page: 0, quantity: 10 },
  waitingRoom: { articles: [], page: 0, quantity: 10 },
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticleBest: (state, action) => {
      state.best.articles = [...state.best.articles, ...action.payload.data];
      state.best.page += 1;
    },
    countArticleBest: (state, action) => {
      state.best.page = action.payload.quantity;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addArticleBest } = articleSlice.actions;
export default articleSlice.reducer;
