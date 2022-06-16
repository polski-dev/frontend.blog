import { VideoWithOnlyTitleType } from "../type/database.videoWithOnlyTitle.type";

export const videoWithOnlyTitleInitialState: VideoWithOnlyTitleType = {
  data: {
    video: {
      data: [],
      meta: {
        pagination: {
          page: 0,
          total: 0,
          pageSize: 0,
          pageCount: 0,
        },
      },
    },
  },
};
