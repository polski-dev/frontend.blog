import { contentInitialState, contentQuery, ContentType } from "./content/database.content.index";
import { contentSearchInitialState, contentSearchQuery, ContentSearchType } from "./content/database.contentSearch.index";
import { tagWithOnlyTitleInitialState, tagWithOnlyTitleQuery, TagWithOnlyTitleType } from "./tag/database.tagWithOnlyTitle.index";
import { contentSearchSugestInitialState, contentSearchSugestQuery, ContentSearchSugestType } from "./content/database.contentSearchSugest.index";
import { articleWithOnlyTitleInitialState, articleWithOnlyTitleQuery, ArticleWithOnlyTitleType } from "./article/database.artice.index";
import { videoShortInitialState, videoShortQuery, VideoShortType } from "./video/database.videoShort.index";
import { shortArticleInitialState, shortArticleByIDQuery, shortArticleByWaitingRoomQuery, ShortArticleType } from "./article/database.shortArtice.index";

async function fetchAPI(query: any, { variables }: any = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

// content
const contentGetPreview: (page: number, waitingroom: boolean) => Promise<ContentType> = async (page: number, waitingroom: boolean): Promise<ContentType> =>
  await fetchAPI(contentQuery, { variables: { page: page * 10, waitingroom } });

const contentSearchGetPreview: (page?: number, waitingroom?: boolean, search?: string) => Promise<ContentSearchType> = async (
  page: number = 0,
  waitingroom: boolean = false,
  search: string = ""
): Promise<ContentSearchType> => await fetchAPI(contentSearchQuery, { variables: { page: page * 10, waitingroom, search } });

const contentSearchSugestGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<ContentSearchSugestType> = async (
  page: number,
  waitingroom: boolean,
  search: string
): Promise<ContentSearchSugestType> => await fetchAPI(contentSearchSugestQuery, { variables: { page: page * 10, waitingroom, search, sort: "views:desc" } });

// article
const articleShortGetPreview: (page: number, waitingroom: boolean) => Promise<VideoShortType> = async (
  page: number,
  waitingroom: boolean
): Promise<VideoShortType> => await fetchAPI(videoShortQuery, { variables: { page, waitingroom } });

// video
const videoShortGetPreview: (page: number, waitingroom: boolean) => Promise<VideoShortType> = async (
  page: number,
  waitingroom: boolean
): Promise<VideoShortType> => await fetchAPI(videoShortQuery, { variables: { page: page * 10, waitingroom } });

// tag
const tagWithOnlyTitleAllGetPreviewList: (page: number) => Promise<TagWithOnlyTitleType> = async (page: number): Promise<TagWithOnlyTitleType> =>
  await fetchAPI(tagWithOnlyTitleQuery, { variables: { page: page * 10, sort: "views:desc" } });

// export
export type { ShortArticleType, ArticleWithOnlyTitleType, VideoShortType, ContentSearchType, ContentSearchSugestType, ContentType, TagWithOnlyTitleType };
export {
  shortArticleInitialState,
  videoShortInitialState,
  videoShortGetPreview,
  articleWithOnlyTitleInitialState,
  contentSearchInitialState,
  contentSearchGetPreview,
  contentSearchSugestInitialState,
  contentSearchSugestGetPreview,
  contentInitialState,
  contentGetPreview,
  tagWithOnlyTitleInitialState,
  tagWithOnlyTitleAllGetPreviewList,
};
