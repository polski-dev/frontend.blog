import { MetaType } from "types/database/types.database.meta";
import { UserType } from "types/database/types.database.user";
import { ErrorType } from "types/database/types.database.error";

export interface UsersFindType {
  data?: UserType[] | null;
  meta?: MetaType;
  error?: ErrorType;
}

export interface UserFindOneType {
  data?: UserType | null;
  error?: ErrorType;
}
