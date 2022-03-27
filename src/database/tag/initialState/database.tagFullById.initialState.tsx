import { TagFullByIdType } from "../type/database.tagFullById.type";

export const tagFullByIdInitialState: TagFullByIdType = {
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
