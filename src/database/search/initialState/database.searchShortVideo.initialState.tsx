import { SearchShortVideoType } from "../type/database.searchShortVideo.type";

export const searchShortVideoInitialState: SearchShortVideoType = {
  data: {
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
  },
};
