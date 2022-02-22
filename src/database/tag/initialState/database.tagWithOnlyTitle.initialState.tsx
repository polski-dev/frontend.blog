import { TagWithOnlyTitleType } from "../type/database.tagWithOnlyTitle.type";

export const tagWithOnlyTitleInitialState: TagWithOnlyTitleType = {
  tag: {
    data: [
      {
        id: "2",
        attributes: {
          title: "css",
        },
      },
      {
        id: "1",
        attributes: {
          title: "JavaScript",
        },
      },
    ],
    meta: {
      pagination: {
        page: 1,
        total: 2,
        pageSize: 10,
        pageCount: 1,
      },
    },
  },
};
