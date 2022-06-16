import { MetaType } from "types/database/types.database.meta";
import { PostType } from "types/database/types.database.post";

export interface PostsFindType {
  data: PostType[] | null;
  meta?: MetaType;
}
