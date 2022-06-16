import { ArticeFullByIdType } from "../type/database.articeFullById.type";

export const articeFullByIdInitialState: ArticeFullByIdType = {
  data: {
    article: {
      data: {
        id: "",
        attributes: {
          title: "",
          views: 0,
          content: "",
          createdAt: new Date(),
          waitingroom: false,
          cover: {
            data: {
              attributes: {
                url: "",
              },
            },
          },
          grades: {
            data: [],
          },
          author: {
            data: null,
          },
          tags: {
            data: [],
          },
          comments: {
            data: [],
          },
        },
      },
    },
  },
};
