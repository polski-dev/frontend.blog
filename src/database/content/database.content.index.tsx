import { orderBy } from "lodash";
import fetchAPI from "database/fetchAPI/database.fetchAPIErrorNotSuport.graphQL";
//
import { ContentShortType } from "./type/database.contentShort.type";
import { contentShortQuery } from "./query/database.contentShort.query";
import { contentShortInitialState } from "./initialState/database.contentShort.initialState";

// metchods
const contentShortGetPreview: (page: number, waitingroom: boolean) => Promise<ContentShortType> = async (page: number, waitingroom: boolean): Promise<ContentShortType> => {
  const data: ContentShortType = await fetchAPI(contentShortQuery, { variables: { page: page * 10, waitingroom } });

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

export type { ContentShortType };
export { contentShortGetPreview, contentShortInitialState };
