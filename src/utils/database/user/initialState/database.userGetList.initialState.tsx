import { UserGetListType } from "../type/database.userGetList.type";

export const userGetListInitialState: UserGetListType = {
  data: {
    usersPermissionsUsers: {
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
