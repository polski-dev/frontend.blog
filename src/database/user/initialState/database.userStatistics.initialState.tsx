import { UserStatisticsType } from "../type/database.userStatistics.type";

export const userStatisticsInitialState: UserStatisticsType = {
  data: {
    views: 0,
    followingmes: 0,
    followuser: 0,
    comments: 0,
    followTags: 0,
    addGrade: 0,
    addPosts: 0,
  },
};
