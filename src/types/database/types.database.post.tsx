import { TagType } from "types/database/types.database.tag";
import { UserType } from "types/database/types.database.user";
import { ImageFromDatabaseFormatsType } from "types/database/types.database.image";

export enum PostsTypEnum {
  article = "article",
  video = "video",
  all = 0,
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
    cover?: { data?: ImageFromDatabaseFormatsType | null };
    tags?: {
      data?: TagType[] | null;
    };
    author?: { data?: UserType | null };
  };
}
