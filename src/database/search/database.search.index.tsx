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

// metchods
const searchSugestContentGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<SearchSugestContentType> = async (
  page: number,
  waitingroom: boolean,
  search: string
): Promise<SearchSugestContentType> => await fetchAPI(searchSugestContentQuery, { variables: { page: page * 10, waitingroom, search, sort: "views:desc" } });

const searchShortContentGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<SearchShortContentType> = async (
  page: number,
  waitingroom: boolean,
  search: string
): Promise<SearchShortContentType> => {
  const data: SearchShortContentType = await fetchAPI(searchShortContentQuery, { variables: { page: page * 10, waitingroom, search } });

  // add type content
  data?.article.data.forEach((article: any) => (article.type = "article"));
  data?.video.data.forEach((video: any) => (video.type = "video"));
  data?.user.data.forEach((user: any) => (user.type = "user"));
  data?.tag.data.forEach((tag: any) => (tag.type = "tag"));

  // count page for all content
  const pageCount = Math.ceil(
    (data.article.meta.pagination.total + data.video.meta.pagination.total + data.tag.meta.pagination.total + data.user.meta.pagination.total) / 10
  );

  return {
    ...data,
    all: {
      data: orderBy([...data.article.data, ...data.video.data, ...data.user.data, ...data.tag.data], (item) => item.attributes.views, ["desc"]),
      meta: {
        pagination: {
          page: page + 1,
          pageSize: 40,
          pageCount: pageCount === 0 ? 1 : pageCount,
          total: data.article.meta.pagination.total + data.video.meta.pagination.total + data.tag.meta.pagination.total + data.user.meta.pagination.total,
        },
      },
    },
  };
};

const searchShortArticleGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<SearchShortArticleType> = async (
  page: number,
  waitingroom: boolean,
  search: string
): Promise<SearchShortArticleType> => {
  const data: SearchShortArticleType = await fetchAPI(searchShortArticleQuery, { variables: { page: page * 10, waitingroom, search } });

  // add type content
  data?.article.data.forEach((article: any) => (article.type = "article"));

  return data;
};

// export
export type { SearchShortContentType, SearchSugestContentType, SearchShortArticleType };
export {
  searchSugestContentGetPreview,
  searchSugestContentInitialState,
  searchShortContentGetPreview,
  searchShortContentInitialState,
  searchShortArticleGetPreview,
  searchShortArticleInitialState,
};
