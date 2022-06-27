import { ErrorType } from "types/database/types.database.error";

export interface UserDataAvatarUpdateType {
  data?: {
    id: number;
    username: string;
    avatar?: {
      url?: string;
    };
  } | null;
  error?: ErrorType;
}

export interface UserDataPublicUpdateType {
  data?: {
    id: 13;
    username: "dd!";
    blocked: false;
    views: 0;
    createdAt: "2022-06-27T09:41:14.240Z";
    updatedAt: "2022-06-27T17:42:24.973Z";
    about: "dwad";
    website: "dawd";
    youtube: "daw";
    instagram: "dawd";
    tiktok: "dawdaw";
    github: "dawd";
    city: "dawdw";
    country: "dwa";
  } | null;
  error?: ErrorType;
}
