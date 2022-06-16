import fetchGraphQLAPI from "utils/database/fetchAPI/database.fetchAPI.graphQL";
import fetchRestAPI from "utils/database/fetchAPI/database.fetchAPI.restAPI";
//
import { VideoShortType } from "./type/database.videoShort.type";
import { videoShortQuery } from "./query/database.videoShort.query";
import { videoShortInitialState } from "./initialState/database.videoShort.initialState";
//
import { VideoFullByIdType } from "./type/database.videoFullById.type";
import { videoFullByIdQuery } from "./query/database.videoFullById.query";
import { videoFullByIdInitialState } from "./initialState/database.videoFullById.initialState";
//
import { VideoWithOnlyTitleType } from "./type/database.videoWithOnlyTitle.type";
import { videoWithOnlyTitleQuery } from "./query/database.videoWithOnlyTitle.query";
import { videoWithOnlyTitleInitialState } from "./initialState/database.videoWithOnlyTitle.initialState";
//
import { VideoAddViewType } from "./type/database.videoAddView.type";
import { videoAddViewInitialState } from "./initialState/database.videoAddView.initialState";
//
import { VideoAddGradeType } from "./type/database.videoAddGrade.type";
import { videoAddGradeInitialState } from "./initialState/database.videoAddGrade.initialState";
//
import { VideoAddCommentsType } from "./type/database.videoAddComments.type";
import { videoAddCommentsInitialState } from "./initialState/database.videoAddComments.initialState";
//
import { VideoGetListCommentsType, VideoGetListCommentsItemType } from "./type/database.videoGetListComments.type";
import { videoGetListCommentsInitialState } from "./initialState/database.videoGetListComments.initialState";

// metchods
const videoShortGetPreview: (page: number, waitingroom: boolean) => Promise<VideoShortType> = async (page: number, waitingroom: boolean): Promise<VideoShortType> => {
  const data: VideoShortType = await fetchGraphQLAPI(videoShortQuery, { variables: { page: page * 10, waitingroom } });
  // add type content
  data?.data.video.data.forEach((art: any) => (art.type = "video"));

  return data;
};

const videoFullByIdGetPreview: (id: number) => Promise<VideoFullByIdType> = async (id: number): Promise<VideoFullByIdType> => await fetchGraphQLAPI(videoFullByIdQuery, { variables: { id } });

const videoAddViewGet: (id: number) => Promise<VideoAddViewType> = async (id: number): Promise<VideoAddViewType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/views/videos/${id}` });

const videoAddGradeGet: (id: number, authorization: string, grade?: string) => Promise<VideoAddGradeType> = async (id: number, authorization: string, grade?: string): Promise<VideoAddGradeType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/videos/${id}/grade`, body: { grade }, authorization });

const videoWithOnlyTitleGetPreview: (page: number) => Promise<VideoWithOnlyTitleType> = async (page: number): Promise<VideoWithOnlyTitleType> => await fetchGraphQLAPI(videoWithOnlyTitleQuery, { variables: { page: page * 10 } });

const videoAddCommentsGet: (description: string, articleId: number, authorization: string) => Promise<VideoAddCommentsType> = async (description: string, articleId: number, authorization: string): Promise<VideoAddCommentsType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/videos/${articleId}/comment`, body: { description }, authorization });

const videoGetListComments: (articleId: number, page: number) => Promise<VideoGetListCommentsType> = async (articleId: number, page: number): Promise<VideoGetListCommentsType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/videos/${articleId}/comment/${page}`, method: "GET" });

export type { VideoShortType, VideoFullByIdType, VideoWithOnlyTitleType, VideoAddViewType, VideoAddGradeType, VideoAddCommentsType, VideoGetListCommentsType, VideoGetListCommentsItemType };
export {
  videoShortGetPreview,
  videoShortInitialState,
  videoFullByIdGetPreview,
  videoFullByIdInitialState,
  videoWithOnlyTitleGetPreview,
  videoWithOnlyTitleInitialState,
  videoAddViewGet,
  videoAddViewInitialState,
  videoAddGradeGet,
  videoAddGradeInitialState,
  videoAddCommentsGet,
  videoAddCommentsInitialState,
  videoGetListComments,
  videoGetListCommentsInitialState,
};
