import { SearchShortTagType } from "../type/database.searchShortTag.type";

export const searchShortTagInitialState: SearchShortTagType = {
  data: {
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
  },
};
