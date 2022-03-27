import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { TagWithOnlyTitleType } from "./type/database.tagWithOnlyTitle.type";
import { tagWithOnlyTitleQuery } from "./query/database.tagWithOnlyTitle.query";
import { tagWithOnlyTitleInitialState } from "./initialState/database.tagWithOnlyTitle.initialState";
//
import { TagFullByIdType } from "./type/database.tagFullById.type";
import { tagFullByIdQuery } from "./query/database.tagFullById.query";
import { tagFullByIdInitialState } from "./initialState/database.tagFullById.initialState";

// metchods
const tagWithOnlyTitleAllGetPreviewList: (page: number) => Promise<TagWithOnlyTitleType> = async (page: number): Promise<TagWithOnlyTitleType> => await fetchAPI(tagWithOnlyTitleQuery, { variables: { page: page * 10, sort: "views:desc" } });

const tagFullByIdGetPreview: (tagID: number) => Promise<TagFullByIdType> = async (tagID: number): Promise<TagFullByIdType> => await fetchAPI(tagFullByIdQuery, { variables: { tagID } });

export type { TagWithOnlyTitleType, TagFullByIdType };
export { tagWithOnlyTitleAllGetPreviewList, tagWithOnlyTitleInitialState, tagFullByIdGetPreview, tagFullByIdInitialState };
