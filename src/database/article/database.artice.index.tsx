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
//
import { ArticeAddGradeType } from "./type/database.articeAddGrade.type";
import { articeAddGradeInitialState } from "./initialState/database.articeAddGrade.initialState";
//
import { ArticeAddCommentsType } from "./type/database.articeAddComments.type";
import { articeAddCommentsInitialState } from "./initialState/database.articeAddComments.initialState";
//
import { ArticeGetListCommentsType, ArticeGetListCommentsItemType } from "./type/database.articeGetListComments.type";
import { articeGetListCommentsInitialState } from "./initialState/database.articeGetListComments.initialState";

// metchods
const articleShortGetPreview: (page: number, waitingroom: boolean) => Promise<ArticleShortType> = async (page: number, waitingroom: boolean): Promise<ArticleShortType> => {
  const data: ArticleShortType = await fetchGraphQLAPI(articleShortQuery, { variables: { page: page * 10, waitingroom } });
  // add type content
  data?.data.article.data.forEach((art: any) => (art.type = "article"));

  return data;
};

const articeFullByIdGetPreview: (id: number) => Promise<ArticeFullByIdType> = async (id: number): Promise<ArticeFullByIdType> => await fetchGraphQLAPI(articeFullByIdQuery, { variables: { id } });

const articeAddViewGet: (id: number) => Promise<ArticeAddViewType> = async (id: number): Promise<ArticeAddViewType> => await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/views/article/${id}` });

const articeAddGradeGet: (id: number, authorization: string, grade?: string) => Promise<ArticeAddGradeType> = async (id: number, authorization: string, grade?: string): Promise<ArticeAddGradeType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/article/${id}/grade`, body: { grade }, authorization });

const articeWithOnlyTitleGetPreview: (page: number) => Promise<ArticeWithOnlyTitleType> = async (page: number): Promise<ArticeWithOnlyTitleType> => await fetchGraphQLAPI(articeWithOnlyTitleQuery, { variables: { page: page * 10 } });

const articeAddCommentsGet: (description: string, articleId: number, authorization: string) => Promise<ArticeAddCommentsType> = async (description: string, articleId: number, authorization: string): Promise<ArticeAddCommentsType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/article/${articleId}/comment`, body: { description }, authorization });

const articeGetListComments: (articleId: number, page: number) => Promise<ArticeGetListCommentsType> = async (articleId: number, page: number): Promise<ArticeGetListCommentsType> =>
  await fetchRestAPI({ path: `${process.env.NEXT_PUBLIC_API_URL}/api/article/${articleId}/comment/${page}`, method: "GET" });

export type { ArticleShortType, ArticeFullByIdType, ArticeWithOnlyTitleType, ArticeAddViewType, ArticeAddGradeType, ArticeAddCommentsType, ArticeGetListCommentsType, ArticeGetListCommentsItemType };
export {
  articleShortGetPreview,
  articleShortInitialState,
  articeFullByIdGetPreview,
  articeFullByIdInitialState,
  articeWithOnlyTitleGetPreview,
  articeWithOnlyTitleInitialState,
  articeAddViewGet,
  articeAddViewInitialState,
  articeAddGradeGet,
  articeAddGradeInitialState,
  articeAddCommentsGet,
  articeAddCommentsInitialState,
  articeGetListComments,
  articeGetListCommentsInitialState,
};
