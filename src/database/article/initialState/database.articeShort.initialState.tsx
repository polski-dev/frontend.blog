import { ArticleShortType } from "../type/database.articeShort.type";

export const articleShortInitialState: ArticleShortType = {
  article: {
    data: [],
    meta: {
      pagination: {
        page: 1,
        total: 0,
        pageSize: 10,
        pageCount: 1,
      },
    },
  },
};
