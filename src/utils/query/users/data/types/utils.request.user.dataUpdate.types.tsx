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
    id: number;
    username: string | null;
    blocked: boolean;
    views: number;
    createdAt: Date;
    updatedAt: Date;
    about: string | null;
    website: string | null;
    youtube: string | null;
    instagram: string | null;
    tiktok: string | null;
    github: string | null;
    city: string | null;
    country: string | null;
  } | null;
  error?: ErrorType;
}

export interface UserDataEmailUpdateType {
  data?: {
    id: number;
    username: string | null;
    email: string | null;
  } | null;
  error?: ErrorType;
}

export interface UserDataPasswordUpdateType {
  data?: {
    id: number;
    username: string | null;
    password: string | null;
  } | null;
  error?: ErrorType;
}

export interface UserDataUserDeleteType {
  data?: {
    id: number;
    username: string | null;
  } | null;
  error?: ErrorType;
}
