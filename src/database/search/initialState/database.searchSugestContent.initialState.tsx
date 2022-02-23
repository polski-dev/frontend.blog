import { SearchSugestContentType } from "../type/database.searchSugestContent.type";

export const searchSugestContentInitialState: SearchSugestContentType = {
  data: {
    all: {
      data: [],
      meta: {
        pagination: {
          page: 1,
          total: 0,
          pageSize: 40,
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
    tag: {
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
