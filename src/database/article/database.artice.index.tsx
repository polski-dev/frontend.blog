import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
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

// metchods
const articleShortGetPreview: (page: number, waitingroom: boolean) => Promise<ArticleShortType> = async (page: number, waitingroom: boolean): Promise<ArticleShortType> => {
  const data: ArticleShortType = await fetchAPI(articleShortQuery, { variables: { page: page * 10, waitingroom } });
  // add type content
  data?.data.article.data.forEach((art: any) => (art.type = "article"));

  return data;
};

const articeFullByIdGetPreview: (id: number) => Promise<ArticeFullByIdType> = async (id: number): Promise<ArticeFullByIdType> => await fetchAPI(articeFullByIdQuery, { variables: { id } });
const articeWithOnlyTitleGetPreview: (page: number) => Promise<ArticeWithOnlyTitleType> = async (page: number): Promise<ArticeWithOnlyTitleType> => await fetchAPI(articeWithOnlyTitleQuery, { variables: { page: page * 10 } });

export type { ArticleShortType, ArticeFullByIdType, ArticeWithOnlyTitleType };
export { articleShortGetPreview, articleShortInitialState, articeFullByIdGetPreview, articeFullByIdInitialState, articeWithOnlyTitleGetPreview, articeWithOnlyTitleInitialState };
