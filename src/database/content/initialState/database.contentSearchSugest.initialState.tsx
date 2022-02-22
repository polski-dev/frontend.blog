import { ContentSearchSugestType } from "../type/database.contentSearchSugest.type";

export const contentSearchSugestInitialState: ContentSearchSugestType = {
  all: {
    data: [],
    meta: {
      pagination: {
        page: 1,
        pageSize: 40,
        pageCount: 1,
        total: 0,
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
};
