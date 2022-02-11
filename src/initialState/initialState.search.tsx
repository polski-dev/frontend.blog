import { SearchStateType } from "types/types.searchState";

const initialStateContentResult: SearchStateType = {
  all: {
    type: "",
    data: [],
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
    },
  },
  article: {
    data: [],
    type: "",
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
    },
  },
  video: {
    data: [],
    type: "",
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
    },
  },
  user: {
    data: [],
    type: "",
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
    },
  },
  tag: {
    data: [],
    type: "",
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 1,
        total: 0,
      },
    },
  },
};

export default initialStateContentResult;
