import { ArticeWithOnlyTitleType } from "../type/database.articeWithOnlyTitle.type";

export const articeWithOnlyTitleInitialState: ArticeWithOnlyTitleType = {
  data: {
    article: {
      data: [],
      meta: {
        pagination: {
          pageCount: 2,
        },
      },
    },
  },
};
