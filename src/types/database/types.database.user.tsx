import { ImageFromDatabaseFormatsType } from "./types.database.image";

export interface UserType {
  id: number;
  attributes: {
    username: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    views: number;
    about: string;
    website: string;
    youtube: string;
    instagram: string;
    tiktok: string;
    github: string;
    city: string;
    country: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    avatar?: { data?: ImageFromDatabaseFormatsType | null };
  };
}
