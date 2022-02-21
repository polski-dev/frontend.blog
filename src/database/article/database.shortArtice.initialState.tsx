import { ShortArticleType } from "./database.shortArtice.type";

export const shortArticleInitialState: ShortArticleType = {
  article: {
    data: [
      {
        id: "",
        attributes: {
          title: "",
          views: 0,
          createdAt: "",
          waitingroom: true,
          cover: {
            data: {
              id: "",
              attributes: {
                url: "",
              },
            },
          },
          tags: {
            data: [],
          },
          comments: {
            data: [],
          },
          grades: {
            data: [],
          },
          author: {
            data: {
              id: "",
              attributes: {
                username: "",
              },
            },
          },
        },
      },
    ],
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
