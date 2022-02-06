import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ArticleType = {
  articles: any[];
  pageActive: number;
  pages: number;
};

export type AllArticleState = {
  all: ArticleType;
  waitingRoom: ArticleType;
};

const initialState: AllArticleState = {
  all: { articles: [], pageActive: 0, pages: 0 },
  waitingRoom: { articles: [], pageActive: 0, pages: 0 },
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticleAll: (state, action: any) => {
      state.all.articles = [...state.all.articles, ...action.payload.data];
      state.all.pageActive += 1;
    },
    addArticleWaitingRoom: (state, action: any) => {
      state.waitingRoom.articles = [...state.waitingRoom.articles, ...action.payload.data];
      state.waitingRoom.pageActive += 1;
    },
    countPageArticleAll: (state, action: any) => {
      state.all.pages = Math.ceil(action.payload.quantity / 10);
    },
    countPageArticleWaitingRoom: (state, action: any) => {
      state.waitingRoom.pages = Math.ceil(action.payload.quantity / 10);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addArticleAll, addArticleWaitingRoom, countPageArticleAll, countPageArticleWaitingRoom } = articleSlice.actions;
export default articleSlice.reducer;
