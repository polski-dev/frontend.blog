import { ErrorType } from "types/database/types.database.error";

export interface UserAmISubscribeType {
  data?: { subscribe: boolean } | null;
  error?: ErrorType;
}

export interface UserChangeSubscribeType {
  data?: {
    id: number;
    username: string;
    followusers: {
      id: number;
    }[];
  } | null;
  error?: ErrorType;
}
