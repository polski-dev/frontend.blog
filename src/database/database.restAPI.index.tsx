import {
  ContentSearchSugestType,
  contentSearchSugestInitialState,
  ContentType,
  contentInitialState,
  TagWithOnlyTitleType,
  tagWithOnlyTitleInitialState,
  VideoShortType,
  videoShortInitialState,
  ArticleShortType,
  articleShortInitialState,
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
const contentSearchSugestGetPreview: (search: string) => Promise<ContentSearchSugestType> = async (search: string): Promise<ContentSearchSugestType> =>
  await fetchAPI({ path: `search/sugest/0/${search}` });

// content
const contentGetPreview: (page: number, waitingroom: boolean) => Promise<ContentType> = async (page: number, waitingroom: boolean): Promise<ContentType> =>
  await fetchAPI({ path: `content/${page}`, body: { waitingroom } });

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

export type { ContentSearchSugestType, ContentType, TagWithOnlyTitleType, VideoShortType, ArticleShortType };

export {
  contentSearchSugestInitialState,
  contentSearchSugestGetPreview,
  contentInitialState,
  contentGetPreview,
  tagWithOnlyTitleInitialState,
  tagWithOnlyTitleAllGetPreviewList,
  videoShortInitialState,
  videoShortGetPreview,
  articleShortInitialState,
  articleShortGetPreview,
};
