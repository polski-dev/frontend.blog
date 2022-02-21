import { ArticleWithOnlyTitleType } from "./database.artice.type";

export const articleWithOnlyTitleInitialState: ArticleWithOnlyTitleType = {
  article: {
    data: [
      {
        attributes: {
          title: "",
        },
      },
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 2,
        total: 18,
      },
    },
  },
};
