import { ErrorType } from "types/database/types.database.error";

export interface TagAmISubscribeType {
  data?: { subscribe: boolean } | null;
  error?: ErrorType;
}

export interface TagChangeSubscribeType {
  data?: {
    id: number;
    username: string;
    followusers: {
      id: number;
    }[];
  } | null;
  error?: ErrorType;
}
