import { contentInitialState, contentQuery, ContentType } from "./content/database.content.index";
import { contentSugestInitialState, contentSugestQuery, ContentSugestType } from "./content/database.contentSugest.index";
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
const contentAllGetPreview: (page?: number, waitingroom?: boolean, search?: string) => Promise<ContentType> = async (
  page: number = 0,
  waitingroom: boolean = false,
  search: string = ""
): Promise<ContentType> => await fetchAPI(contentQuery, { variables: { page: page * 10, waitingroom, search } });

const contentSugestGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<ContentSugestType> = async (
  page: number,
  waitingroom: boolean,
  search: string
): Promise<ContentSugestType> => await fetchAPI(contentSugestQuery, { variables: { page: page * 10, waitingroom, search, sort: "views:desc" } });

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

// export
export type { ShortArticleType, ArticleWithOnlyTitleType, ShortVideoType, ContentType, ContentSugestType };
export {
  shortArticleInitialState,
  shortArticleByIdGetPreview,
  shortArticleAllByWaitingRoomGetPreview,
  shortVideoInitialState,
  shortVideoByIdGetPreview,
  shortVideoAllByWaitingRoomGetPreview,
  articleWithOnlyTitleInitialState,
  articleWithOnlyTitleAllGetPreviewList,
  contentInitialState,
  contentAllGetPreview,
  contentSugestInitialState,
  contentSugestGetPreview,
};
