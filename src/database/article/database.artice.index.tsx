import fetchGraphQLAPI from "database/fetchAPI/database.fetchAPI.graphQL";
import fetchRestAPI from "database/fetchAPI/database.fetchAPI.restAPI";
//
import { ArticleShortType } from "./type/database.articeShort.type";
import { articleShortQuery } from "./query/database.articleShort.query";
import { articleShortInitialState } from "./initialState/database.articeShort.initialState";
//
import { ArticeFullByIdType } from "./type/database.articeFullById.type";
import { articeFullByIdQuery } from "./query/database.articeFullById.query";
import { articeFullByIdInitialState } from "./initialState/database.articeFullById.initialState";
//
import { ArticeWithOnlyTitleType } from "./type/database.articeWithOnlyTitle.type";
import { articeWithOnlyTitleQuery } from "./query/database.articeWithOnlyTitle.query";
import { articeWithOnlyTitleInitialState } from "./initialState/database.articeWithOnlyTitle.initialState";
//
import { ArticeAddViewType } from "./type/database.articeAddView.type";
import { articeAddViewInitialState } from "./initialState/database.articeAddView.initialState";

// metchods
const articleShortGetPreview: (page: number, waitingroom: boolean) => Promise<ArticleShortType> = async (page: number, waitingroom: boolean): Promise<ArticleShortType> => {
  const data: ArticleShortType = await fetchGraphQLAPI(articleShortQuery, { variables: { page: page * 10, waitingroom } });
  // add type content
  data?.data.article.data.forEach((art: any) => (art.type = "article"));

  return data;
};

const articeFullByIdGetPreview: (id: number) => Promise<ArticeFullByIdType> = async (id: number): Promise<ArticeFullByIdType> => await fetchGraphQLAPI(articeFullByIdQuery, { variables: { id } });
const articeAddViewGet: (id: number) => Promise<ArticeAddViewType> = async (id: number): Promise<ArticeAddViewType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/views/article/${id}` });
const articeWithOnlyTitleGetPreview: (page: number) => Promise<ArticeWithOnlyTitleType> = async (page: number): Promise<ArticeWithOnlyTitleType> => await fetchGraphQLAPI(articeWithOnlyTitleQuery, { variables: { page: page * 10 } });

export type { ArticleShortType, ArticeFullByIdType, ArticeWithOnlyTitleType, ArticeAddViewType };
export { articleShortGetPreview, articleShortInitialState, articeFullByIdGetPreview, articeFullByIdInitialState, articeWithOnlyTitleGetPreview, articeWithOnlyTitleInitialState, articeAddViewGet, articeAddViewInitialState };
