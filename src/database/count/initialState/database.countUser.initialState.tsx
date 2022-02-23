import { CountUserType } from "../type/database.countUser.type";

export const countUserInitialState: CountUserType = {
  data: {
    user: {
      meta: {
        pagination: {
          total: 0,
        },
      },
    },
  },
};