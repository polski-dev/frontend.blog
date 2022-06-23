import { MetaType } from "types/database/types.database.meta";
import { TagType } from "types/database/types.database.tag";
import { ErrorType } from "types/database/types.database.error";

export interface TagsFindType {
  data?: TagType[] | null;
  meta?: MetaType;
  error?: ErrorType;
}

export interface TagFindOneType {
  data?: TagType | null;
  meta?: MetaType;
  error?: ErrorType;
}
