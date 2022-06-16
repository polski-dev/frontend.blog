import fetchGraphQLAPI from "utils/database/fetchAPI/database.fetchAPI.graphQL";
import fetchRestAPI from "utils/database/fetchAPI/database.fetchAPI.restAPI";
//
import { TagWithOnlyTitleType } from "./type/database.tagWithOnlyTitle.type";
import { tagWithOnlyTitleQuery } from "./query/database.tagWithOnlyTitle.query";
import { tagWithOnlyTitleInitialState } from "./initialState/database.tagWithOnlyTitle.initialState";
//
import { TagFullByIdType } from "./type/database.tagFullById.type";
import { tagFullByIdQuery } from "./query/database.tagFullById.query";
import { tagFullByIdInitialState } from "./initialState/database.tagFullById.initialState";
//
import { TagSubscriptionStatusType } from "./type/database.tagSubscriptionStatus.type";
import { tagSubscriptionStatusInitialState } from "./initialState/database.tagSubscriptionStatus.initialState";
//
import { TagSubscriptionToggleType } from "./type/database.tagSubscriptionToggle.type";
import { tagSubscriptionToggleInitialState } from "./initialState/database.tagSubscriptionToggle.initialState";
//
import { TagStatisticsType } from "./type/database.tagStatistics.type";
import { tagStatisticsInitialState } from "./initialState/database.tagStatistics.initialState";

// metchods
const tagWithOnlyTitleAllGetPreviewList: (page: number) => Promise<TagWithOnlyTitleType> = async (page: number): Promise<TagWithOnlyTitleType> => await fetchGraphQLAPI(tagWithOnlyTitleQuery, { variables: { page: page * 10, sort: "views:desc" } });

const tagFullByIdGetPreview: (tagID: number) => Promise<TagFullByIdType> = async (tagID: number): Promise<TagFullByIdType> => await fetchGraphQLAPI(tagFullByIdQuery, { variables: { tagID } });

const tagSubscriptionStatusGet: (idUser: number, authorization: string) => Promise<TagSubscriptionStatusType> = async (idUser: number, authorization: string): Promise<TagSubscriptionStatusType> => {
  return await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/tag/${idUser}/subscribe`, authorization });
};

const tagSubscriptionToggleGet: (idTag: number, authorization: string) => Promise<TagSubscriptionStatusType> = async (idTag: number, authorization: string): Promise<TagSubscriptionStatusType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/tag/${idTag}/subscribe/toggle`, authorization });

const tagStatisticsGet: (idTag: number) => Promise<TagStatisticsType> = async (idTag: number): Promise<TagStatisticsType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/tag/${idTag}/statistics` });

export type { TagWithOnlyTitleType, TagFullByIdType, TagSubscriptionStatusType, TagSubscriptionToggleType, TagStatisticsType };
export { tagWithOnlyTitleAllGetPreviewList, tagWithOnlyTitleInitialState, tagFullByIdGetPreview, tagFullByIdInitialState, tagSubscriptionStatusGet, tagSubscriptionStatusInitialState, tagSubscriptionToggleGet, tagSubscriptionToggleInitialState, tagStatisticsGet, tagStatisticsInitialState };
