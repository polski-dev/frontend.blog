import { contentInitialState, contentQuery, ContentType } from "./content/database.content.index";
import { contentSearchInitialState, contentSearchQuery, ContentSearchType } from "./content/database.contentSearch.index";
import { tagWithOnlyTitleInitialState, tagWithOnlyTitleQuery, TagWithOnlyTitleType } from "./tag/database.tagWithOnlyTitle.index";
import { contentSearchSugestInitialState, contentSearchSugestQuery, ContentSearchSugestType } from "./content/database.contentSearchSugest.index";
import { articleWithOnlyTitleInitialState, articleWithOnlyTitleQuery, ArticleWithOnlyTitleType } from "./article/database.artice.index";
import { shortVideoInitialState, shortVideoByIDQuery, shortVideoByWaitingRoomQuery, ShortVideoType } from "./video/database.video.index";
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
const articleWithOnlyTitleAllGetPreviewList: (page: number) => Promise<ArticleWithOnlyTitleType> = async (page: number): Promise<ArticleWithOnlyTitleType> =>
  await fetchAPI(articleWithOnlyTitleQuery, { variables: { page: page * 10 } });

const shortArticleByIdGetPreview: (id: number) => Promise<ShortArticleType> = async (id: number): Promise<ShortArticleType> =>
  await fetchAPI(shortArticleByIDQuery, { variables: { id } });

const shortArticleAllByWaitingRoomGetPreview: (waitingroom: boolean, page: number) => Promise<ShortArticleType> = async (
  waitingroom: boolean,
  page: number
): Promise<ShortArticleType> => await fetchAPI(shortArticleByWaitingRoomQuery, { variables: { waitingroom, page: page * 10 } });

// video
const shortVideoByIdGetPreview: (id: number) => Promise<ShortVideoType> = async (id: number): Promise<ShortVideoType> =>
  await fetchAPI(shortVideoByIDQuery, { variables: { id } });

const shortVideoAllByWaitingRoomGetPreview: (waitingroom: boolean, page: number) => Promise<ShortVideoType> = async (
  waitingroom: boolean,
  page: number
): Promise<ShortVideoType> => await fetchAPI(shortVideoByWaitingRoomQuery, { variables: { waitingroom, page: page * 10 } });

// tag
const tagWithOnlyTitleAllGetPreviewList: (page: number) => Promise<TagWithOnlyTitleType> = async (page: number): Promise<TagWithOnlyTitleType> =>
  await fetchAPI(tagWithOnlyTitleQuery, { variables: { page: page * 10, sort: "views:desc" } });

// export
export type { ShortArticleType, ArticleWithOnlyTitleType, ShortVideoType, ContentSearchType, ContentSearchSugestType, ContentType, TagWithOnlyTitleType };
export {
  shortArticleInitialState,
  shortArticleByIdGetPreview,
  shortArticleAllByWaitingRoomGetPreview,
  shortVideoInitialState,
  shortVideoByIdGetPreview,
  shortVideoAllByWaitingRoomGetPreview,
  articleWithOnlyTitleInitialState,
  articleWithOnlyTitleAllGetPreviewList,
  contentSearchInitialState,
  contentSearchGetPreview,
  contentSearchSugestInitialState,
  contentSearchSugestGetPreview,
  contentInitialState,
  contentGetPreview,
  tagWithOnlyTitleInitialState,
  tagWithOnlyTitleAllGetPreviewList,
};
