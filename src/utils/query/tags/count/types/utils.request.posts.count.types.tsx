import { ErrorType } from "types/database/types.database.error";

export interface TagCountType {
  data?: {
    views: number;
    followTags: number;
    publishedPost: number;
    unPublishedPost: number;
    publishedArticle: number;
    unPublishedArticle: number;
    publishedVideo: number;
    unPublishedVideo: number;
  } | null;
}

export interface TagsCountType {
  data?: {
    tagsCount: number;
  } | null;
  error?: ErrorType;
}
