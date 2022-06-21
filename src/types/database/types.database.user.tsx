import { ImageFromDatabaseType } from "./types.database.image";
import { TagType } from "./types.database.tag";

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
    avatar?: { data?: ImageFromDatabaseType | null };
    skilks?: TagType[] | null;
    learn?: TagType[] | null;
  };
}
