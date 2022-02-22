import { CountUserType } from "../type/database.countUser.type";

export const countUserInitialState: CountUserType = {
  user: {
    meta: {
      pagination: {
        total: 0,
      },
    },
  },
};
