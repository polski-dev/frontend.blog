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
} from "./database.graphQL.index";

async function fetchAPI({ path, body = {} }: { path: string; body?: {} }): Promise<any> {
  const res = await fetch(`/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json;
}

// search
const searchSugestContentGetPreview: (search: string) => Promise<SearchSugestContentType> = async (search: string): Promise<SearchSugestContentType> =>
  await fetchAPI({ path: `search/sugest/0/${search}` });

const searchShortContentGetPreview: (page: number, search: string) => Promise<SearchShortContentType> = async (
  page: number,
  search: string
): Promise<SearchShortContentType> => await fetchAPI({ path: `search/${page}/${search}` });

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

export type { ContentShortType, TagWithOnlyTitleType, VideoShortType, ArticleShortType, SearchSugestContentType, SearchShortContentType };

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
};
