import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { VideoShortType } from "./type/database.videoShort.type";
import { videoShortQuery } from "./query/database.videoShort.query";
import { videoShortInitialState } from "./initialState/database.videoShort.initialState";

// metchods
const videoShortGetPreview: (page: number, waitingroom: boolean) => Promise<VideoShortType> = async (page: number, waitingroom: boolean): Promise<VideoShortType> => {
  const data: VideoShortType = await fetchAPI(videoShortQuery, { variables: { page: page * 10, waitingroom } });
  // add type content
  data?.data.video.data.forEach((art: any) => (art.type = "video"));

  return data;
};

export type { VideoShortType };
export { videoShortGetPreview, videoShortInitialState };
