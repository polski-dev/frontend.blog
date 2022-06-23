import { ErrorType } from "types/database/types.database.error";

export interface PostsCountType {
  data?: {
    all?: number;
    publishedAll?: number;
    unPublishedAll?: number;
    allArticle: number;
    publishedAllArticle: number;
    unPublishedAllArticle: number;
    allVideo: number;
    publishedAllVideo: number;
    unPublishedAllVideo: number;
  } | null;
}

export interface PostCountType {
  data?: {
    ratings?: { best?: number; wow?: number; wrr?: number; count?: number };
    views: number;
    comments: number;
  } | null;
  error?: ErrorType;
}
