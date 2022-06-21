import { ErrorType } from "types/database/types.database.error";

export interface UserAmISubscribeType {
  data?: { subscribe: boolean } | null;
  error?: ErrorType;
}
