import { orderBy } from "lodash";
import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { ContentType } from "./type/database.content.type";
import { contentQuery } from "./query/database.content.query";
import { contentInitialState } from "./initialState/database.content.initialState";
//
import { ContentSearchSugestType } from "./type/database.contentSearchSugest.type";
import { contentSearchSugestQuery } from "./query/database.contentSearchSugest.query";
import { contentSearchSugestInitialState } from "./initialState/database.contentSearchSugest.initialState";
//
import { ContentSearchType } from "./type/database.contentSearch.type";
import { contentSearchQuery } from "./query/database.contentSearch.query";
import { contentSearchInitialState } from "./initialState/database.contentSearch.initialState";

// metchods
const contentGetPreview: (page: number, waitingroom: boolean) => Promise<ContentType> = async (page: number, waitingroom: boolean): Promise<ContentType> => {
  const data: ContentType = await fetchAPI(contentQuery, { variables: { page: page * 10, waitingroom } });

  // add type content
  data?.article.data.forEach((art: any) => (art.type = "article"));
  data?.video.data.forEach((art: any) => (art.type = "video"));

  // count page for all content
  const pageCount = Math.ceil((data.article.meta.pagination.total + data.video.meta.pagination.total) / 10);

  return {
    all: {
      data: orderBy([...data.article.data, ...data.video.data], (item) => item.attributes.createdAt, ["desc"]),
      meta: {
        pagination: {
          page: page + 1,
          pageSize: 20,
          pageCount: pageCount === 0 ? 1 : pageCount,
          total: data.article.meta.pagination.total + data.video.meta.pagination.total,
        },
      },
    },
    ...data,
  };
};

const contentSearchSugestGetPreview: (page: number, waitingroom: boolean, search: string) => Promise<ContentSearchSugestType> = async (
  page: number,
  waitingroom: boolean,
  search: string
): Promise<ContentSearchSugestType> => await fetchAPI(contentSearchSugestQuery, { variables: { page: page * 10, waitingroom, search, sort: "views:desc" } });

export type { ContentType, ContentSearchSugestType };
export { contentGetPreview, contentInitialState, contentSearchSugestGetPreview, contentSearchSugestInitialState };
