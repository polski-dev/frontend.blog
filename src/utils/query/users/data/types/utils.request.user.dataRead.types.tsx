import { ErrorType } from "types/database/types.database.error";
import { ImageFromDatabaseType } from "types/database/types.database.image";

export interface UserDataPublicReadType {
  data?: {
    id: number;
    username: string | null;
    blocked: boolean;
    views: number;
    createdAt: Date;
    updatedAt: Date;
    about: "dwdw";
    website: string | null;
    youtube: string | null;
    instagram: string | null;
    tiktok: string | null;
    github: string | null;
    city: string | null;
    country: string | null;
    avatar?: ImageFromDatabaseType | null;
  } | null;
  error?: ErrorType;
}
