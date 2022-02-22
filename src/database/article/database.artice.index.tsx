import fetchAPI from "database/fetchAPI/database.fetchAPI.graphQL";
//
import { ArticleShortType } from "./type/database.articeShort.type";
import { articleShortQuery } from "./query/database.articeShort.query";
import { articleShortInitialState } from "./initialState/database.articeShort.initialState";

// metchods
const articleShortGetPreview: (page: number, waitingroom: boolean) => Promise<ArticleShortType> = async (
  page: number,
  waitingroom: boolean
): Promise<ArticleShortType> => {
  const data: ArticleShortType = await fetchAPI(articleShortQuery, { variables: { page: page * 10, waitingroom } });
  // add type content
  data?.article.data.forEach((art: any) => (art.type = "article"));

  return data;
};

export type { ArticleShortType };
export { articleShortGetPreview, articleShortInitialState };
