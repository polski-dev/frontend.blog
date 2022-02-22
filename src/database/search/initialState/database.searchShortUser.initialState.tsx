import { SearchShortUserType } from "../type/database.searchShortUser.type";

export const searchShortUserInitialState: SearchShortUserType = {
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
