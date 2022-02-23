import { orderBy } from "lodash";
import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { SearchSugestContentType } from "./type/database.searchSugestContent.type";
import { searchSugestContentQuery } from "./query/database.searchSugestContent.query";
import { searchSugestContentInitialState } from "./initialState/database.searchSugestContent.initialState";
//
import { SearchShortContentType } from "./type/database.searchShortContent.type";
import { searchShortContentQuery } from "./query/database.searchShortContent.query";
import { searchShortContentInitialState } from "./initialState/database.searchShortContent.initialState";
//
import { SearchShortArticleType } from "./type/database.searchShortArticle.type";
import { searchShortArticleQuery } from "./query/database.searchShortArticle.query";
import { searchShortArticleInitialState } from "./initialState/database.searchShortArticle.initialState";
//
import { SearchShortVideoType } from "./type/database.searchShortVideo.type";
import { searchShortVideoQuery } from "./query/database.searchShortVideo.query";
import { searchShortVideoInitialState } from "./initialState/database.searchShortVideo.initialState";
//
import { SearchShortTagType } from "./type/database.searchShortTag.type";
import { searchShortTagQuery } from "./query/database.searchShortTag.query";
import { searchShortTagInitialState } from "./initialState/database.searchShortTag.initialState";
//
import { SearchShortUserType } from "./type/database.searchShortUser.type";
import { searchShortUserQuery } from "./query/database.searchShortUser.query";
import { searchShortUserInitialState } from "./initialState/database.searchShortUser.initialState";

// metchods
const searchSugestContentGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<SearchSugestContentType> = async (page: number, waitingroom: boolean, search: string): Promise<SearchSugestContentType> =>
  await fetchAPI(searchSugestContentQuery, { variables: { page: page * 10, waitingroom, search, sort: "views:desc" } });

const searchShortContentGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<SearchShortContentType> = async (page: number, waitingroom: boolean, search: string): Promise<SearchShortContentType> => {
  const data: SearchShortContentType = await fetchAPI(searchShortContentQuery, { variables: { page: page * 10, waitingroom, search } });

  // add type content
  data?.data.article.data.forEach((article: any) => (article.type = "article"));
  data?.data.video.data.forEach((video: any) => (video.type = "video"));
  data?.data.user.data.forEach((user: any) => (user.type = "user"));
  data?.data.tag.data.forEach((tag: any) => (tag.type = "tag"));

  // count page for all content
  const pageCount = Math.ceil((data.data.article.meta.pagination.total + data.data.video.meta.pagination.total + data.data.tag.meta.pagination.total + data.data.user.meta.pagination.total) / 10);

  return {
    data: {
      all: {
        data: orderBy([...data.data.article.data, ...data.data.video.data, ...data.data.user.data, ...data.data.tag.data], (item) => item.attributes.views, ["desc"]),
        meta: {
          pagination: {
            page: page + 1,
            pageSize: 40,
            pageCount: pageCount === 0 ? 1 : pageCount,
            total: data.data.article.meta.pagination.total + data.data.video.meta.pagination.total + data.data.tag.meta.pagination.total + data.data.user.meta.pagination.total,
          },
        },
      },
      ...data.data,
    },
  };
};

const searchShortArticleGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<SearchShortArticleType> = async (page: number, waitingroom: boolean, search: string): Promise<SearchShortArticleType> => {
  const data: SearchShortArticleType = await fetchAPI(searchShortArticleQuery, { variables: { page: page * 10, waitingroom, search } });
  data?.data.article.data.forEach((article: any) => (article.type = "article"));
  return data;
};

const searchShortVideoGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<SearchShortVideoType> = async (page: number, waitingroom: boolean, search: string): Promise<SearchShortVideoType> => {
  const data: SearchShortVideoType = await fetchAPI(searchShortVideoQuery, { variables: { page: page * 10, waitingroom, search } });
  data?.data.video.data.forEach((video: any) => (video.type = "video"));
  return data;
};

const searchShortTagGetPreview: (page: number, search: string) => Promise<SearchShortTagType> = async (page: number, search: string): Promise<SearchShortTagType> => {
  const data: SearchShortTagType = await fetchAPI(searchShortTagQuery, { variables: { page: page * 10, search } });
  data?.data.tag.data.forEach((tag: any) => (tag.type = "tag"));
  return data;
};

const searchShortUserGetPreview: (page: number, search: string) => Promise<SearchShortUserType> = async (page: number, search: string): Promise<SearchShortUserType> => {
  const data: SearchShortUserType = await fetchAPI(searchShortUserQuery, { variables: { page: page * 10, search } });
  data?.data.user.data.forEach((user: any) => (user.type = "user"));
  return data;
};

// export
export type { SearchShortContentType, SearchSugestContentType, SearchShortArticleType, SearchShortVideoType, SearchShortTagType, SearchShortUserType };
export {
  searchSugestContentGetPreview,
  searchSugestContentInitialState,
  searchShortContentGetPreview,
  searchShortContentInitialState,
  searchShortArticleGetPreview,
  searchShortArticleInitialState,
  searchShortVideoGetPreview,
  searchShortVideoInitialState,
  searchShortTagGetPreview,
  searchShortTagInitialState,
  searchShortUserGetPreview,
  searchShortUserInitialState,
};
