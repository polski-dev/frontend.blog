import { ErrorType } from "types/database/types.database.error";

export interface UsersCountType {
  data?: {
    count: number;
  } | null;
  error?: ErrorType;
}

export interface UserCountType {
  data?: {
    views: number;
    posts: number;
    followtags: number;
    commentsAdded: number;
    followusers: number;
    followingmes: number;
  } | null;
  error?: ErrorType;
}
