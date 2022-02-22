import fetchAPI from "./fetchAPI/database.fetchAPI.restAPI";

import {
  ContentShortType,
  contentShortInitialState,
  TagWithOnlyTitleType,
  tagWithOnlyTitleInitialState,
  VideoShortType,
  videoShortInitialState,
  ArticleShortType,
  articleShortInitialState,
  SearchSugestContentType,
  searchSugestContentInitialState,
  SearchShortContentType,
  searchShortContentInitialState,
  SearchShortArticleType,
  searchShortArticleInitialState,
} from "./database.graphQL.index";

// search
const searchSugestContentGetPreview: (search: string) => Promise<SearchSugestContentType> = async (search: string): Promise<SearchSugestContentType> =>
  await fetchAPI({ path: `search/sugest/0/${search}` });

const searchShortContentGetPreview: (page: number, search: string) => Promise<SearchShortContentType> = async (
  page: number,
  search: string
): Promise<SearchShortContentType> => await fetchAPI({ path: `search/${page}/${search}` });

const searchShortArticleGetPreview: (page: number, search: string) => Promise<SearchShortArticleType> = async (
  page: number,
  search: string
): Promise<SearchShortArticleType> => await fetchAPI({ path: `search/articleshort/${page}/${search}` });

// content
const contentShortGetPreview: (page: number, waitingroom: boolean) => Promise<ContentShortType> = async (
  page: number,
  waitingroom: boolean
): Promise<ContentShortType> => await fetchAPI({ path: `content/${page}`, body: { waitingroom } });

// tag
const tagWithOnlyTitleAllGetPreviewList: (page: number) => Promise<TagWithOnlyTitleType> = async (page: number): Promise<TagWithOnlyTitleType> =>
  await fetchAPI({ path: `tag/${page}` });

// article
const articleShortGetPreview: (page: number, waitingroom: boolean) => Promise<ArticleShortType> = async (
  page: number,
  waitingroom: boolean
): Promise<ArticleShortType> => await fetchAPI({ path: `article/${page}`, body: { waitingroom } });

// video
const videoShortGetPreview: (page: number, waitingroom: boolean) => Promise<VideoShortType> = async (
  page: number,
  waitingroom: boolean
): Promise<VideoShortType> => await fetchAPI({ path: `video/${page}`, body: { waitingroom } });

export type {
  ContentShortType,
  TagWithOnlyTitleType,
  VideoShortType,
  ArticleShortType,
  SearchSugestContentType,
  SearchShortContentType,
  SearchShortArticleType,
};

export {
  contentShortInitialState,
  contentShortGetPreview,
  tagWithOnlyTitleInitialState,
  tagWithOnlyTitleAllGetPreviewList,
  videoShortInitialState,
  videoShortGetPreview,
  articleShortInitialState,
  articleShortGetPreview,
  searchSugestContentInitialState,
  searchSugestContentGetPreview,
  searchShortContentInitialState,
  searchShortContentGetPreview,
  searchShortArticleInitialState,
  searchShortArticleGetPreview,
};
