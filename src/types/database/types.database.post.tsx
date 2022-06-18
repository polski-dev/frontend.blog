import { RatingType } from "./types.database.rating";
import { TagType } from "types/database/types.database.tag";
import { UserType } from "types/database/types.database.user";
import { MetaType } from "./types.database.meta";
import { ImageFromDatabaseType } from "types/database/types.database.image";

export enum PostsTypEnum {
  article = "article",
  video = "video",
  post = "post",
}

export interface PostType {
  id: number;
  attributes: {
    title: string;
    views: number;
    content: string;
    youtube: null | string;
    createdAt: Date | null;
    updatedAt: Date | null;
    publishedAt: Date | null;
    typ: PostsTypEnum;
    cover?: { data?: ImageFromDatabaseType | null };
    tags?: {
      data?: TagType[] | null;
    };
    author?: { data?: UserType | null };
    ratings?: { data?: RatingType[] | null };
  };
}

export interface PostFullType {
  data: {
    id: number;
    attributes: {
      title: string;
      views: number;
      content: string;
      youtube: null | string;
      createdAt: Date | null;
      updatedAt: Date | null;
      publishedAt: Date | null;
      typ: PostsTypEnum;
      cover?: { data?: ImageFromDatabaseType | null };
      tags?: {
        data?: TagType[] | null;
      };
      author?: { data?: UserType | null };
      ratings?: { data?: RatingType[] | null };
    };
  };
  meta?: MetaType;
}
