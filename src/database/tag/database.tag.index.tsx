import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { TagWithOnlyTitleType } from "./type/database.tagWithOnlyTitle.type";
import { tagWithOnlyTitleQuery } from "./query/database.tagWithOnlyTitle.query";
import { tagWithOnlyTitleInitialState } from "./initialState/database.tagWithOnlyTitle.initialState";

// metchods
const tagWithOnlyTitleAllGetPreviewList: (page: number) => Promise<TagWithOnlyTitleType> = async (page: number): Promise<TagWithOnlyTitleType> => await fetchAPI(tagWithOnlyTitleQuery, { variables: { page: page * 10, sort: "views:desc" } });

export type { TagWithOnlyTitleType };
export { tagWithOnlyTitleAllGetPreviewList, tagWithOnlyTitleInitialState };
