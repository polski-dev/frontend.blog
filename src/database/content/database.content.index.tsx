import { orderBy } from "lodash";
import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { ContentShortType } from "./type/database.contentShort.type";
import { contentShortQuery } from "./query/database.contentShort.query";
import { contentShortInitialState } from "./initialState/database.contentShort.initialState";

//
import { ContentShortFromUserType } from "./type/database.contentShortFromUser.type";
import { contentShortFromUserQuery } from "./query/database.contentShortFromUser.query";
import { contentShortFromUserInitialState } from "./initialState/database.contentShortFromUser.initialState";

// metchods
const contentShortGetPreview: (page: number, waitingroom: boolean) => Promise<ContentShortType> = async (page: number, waitingroom: boolean): Promise<ContentShortType> => {
  const data: ContentShortType = await fetchAPI(contentShortQuery, { variables: { page: page * 10, waitingroom } });

  if (!data) return contentShortInitialState;

  // add type content
  data?.data?.article?.data.forEach((art: any) => (art.type = "article"));
  data?.data?.video?.data.forEach((art: any) => (art.type = "video"));

  // count page for all content
  const totalArticle = data?.data?.article?.meta?.pagination?.total || 0;
  const totalVideo = data?.data?.video?.meta?.pagination?.total || 0;
  const pageCount = Math.ceil((totalArticle + totalVideo) / 10);

  const allArticle = data?.data?.article?.data || [];
  const allVideo = data?.data?.video?.data || [];

  return {
    data: {
      all: {
        data: orderBy([...allArticle, ...allVideo], (item) => item.attributes.createdAt, ["desc"]),
        meta: {
          pagination: {
            page: page + 1,
            pageSize: 20,
            pageCount: pageCount === 0 ? 1 : pageCount,
            total: totalArticle + totalVideo,
          },
        },
      },
      ...data.data,
    },
  };
};

const contentShortFromUserGetPreview: (page: number, userId: number) => Promise<ContentShortType> = async (page: number, userId: number): Promise<ContentShortType> => {
  const data: ContentShortType = await fetchAPI(contentShortFromUserQuery, { variables: { page: page * 10, userId } });

  if (!data) return contentShortFromUserInitialState;

  // add type content
  data?.data?.article?.data.forEach((art: any) => (art.type = "article"));
  data?.data?.video?.data.forEach((art: any) => (art.type = "video"));

  // count page for all content
  const totalArticle = data?.data?.article?.meta?.pagination?.total || 0;
  const totalVideo = data?.data?.video?.meta?.pagination?.total || 0;
  const pageCount = Math.ceil((totalArticle + totalVideo) / 10);

  const allArticle = data?.data?.article?.data || [];
  const allVideo = data?.data?.video?.data || [];

  return {
    data: {
      all: {
        data: orderBy([...allArticle, ...allVideo], (item) => item.attributes.createdAt, ["desc"]),
        meta: {
          pagination: {
            page: page + 1,
            pageSize: 20,
            pageCount: pageCount === 0 ? 1 : pageCount,
            total: totalArticle + totalVideo,
          },
        },
      },
      ...data.data,
    },
  };
};

export type { ContentShortType, ContentShortFromUserType };
export { contentShortGetPreview, contentShortInitialState, contentShortFromUserGetPreview, contentShortFromUserInitialState };
