import { ContentType } from "./database.content.type";

export const contentInitialState: ContentType = {
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
  video: {
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
