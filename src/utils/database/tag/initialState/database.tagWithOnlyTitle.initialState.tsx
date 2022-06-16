import { TagWithOnlyTitleType } from "../type/database.tagWithOnlyTitle.type";

export const tagWithOnlyTitleInitialState: TagWithOnlyTitleType = {
  data: {
    tag: {
      data: [],
      meta: {
        pagination: {
          page: 1,
          total: 2,
          pageSize: 10,
          pageCount: 1,
        },
      },
    },
  },
};
