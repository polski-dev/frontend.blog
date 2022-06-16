import { VideoFullByIdType } from "../type/database.videoFullById.type";

export const videoFullByIdInitialState: VideoFullByIdType = {
  data: {
    video: {
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
