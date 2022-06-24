import { TagType } from "types/database/types.database.tag";
import { ErrorType } from "types/database/types.database.error";

export interface ViewAddInTagType {
  data?: TagType | null;
  error?: ErrorType;
}
