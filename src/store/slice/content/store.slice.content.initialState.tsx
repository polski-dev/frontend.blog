import { SliceContentType, AllContentStateType } from "./store.slice.content.type";

const initialState: AllContentStateType = {
  all: {
    home: {
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
    waitingRoom: {
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
  },
  article: {
    home: {
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
    waitingRoom: {
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
  },
  video: {
    home: {
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
    waitingRoom: {
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
  },
};

export default initialState;
