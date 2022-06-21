import { ErrorType } from "types/database/types.database.error";

export interface UserAddviewsInPageUserType {
  data?: {
    views: number;
    id: number;
  } | null;
  error?: ErrorType;
}
