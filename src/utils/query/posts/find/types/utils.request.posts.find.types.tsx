import { MetaType } from "types/database/types.database.meta";
import { PostType } from "types/database/types.database.post";
import { ErrorType } from "types/database/types.database.error";

export interface PostsFindType {
  data: PostType[] | null;
  meta?: MetaType;
  error?: ErrorType;
}

export interface PostFindOneType {
  data: PostType | null;
  meta?: MetaType;
  error?: ErrorType;
}
