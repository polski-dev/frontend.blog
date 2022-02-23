import { SearchShortArticleType } from "../type/database.searchShortArticle.type";

export const searchShortArticleInitialState: SearchShortArticleType = {
  data: {
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
  },
};
