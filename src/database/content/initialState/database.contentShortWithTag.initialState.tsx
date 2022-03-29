import { ContentShortWithTagType } from "../type/database.contentShortWithTag.type";

export const contentShortWithTagInitialState: ContentShortWithTagType = {
  data: {
    all: {
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
    user: {
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
