import { ImageFromDatabaseType } from "./types.database.image";

export interface TagType {
  id: number;
  attributes: {
    title: string;
    views: number;
    description: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    publishedAt: Date | null;
    cover?: { data: ImageFromDatabaseType } | { data: null };
  };
}
