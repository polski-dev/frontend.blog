import { MetaType } from "types/database/types.database.meta";
import { TagType } from "types/database/types.database.tag";
import { PostType } from "types/database/types.database.post";
import { ErrorType } from "types/database/types.database.error";
import { UserType } from "types/database/types.database.user";

export interface SearchType {
  data?: {
    tags?: {
      data?: TagType[] | null;
      meta?: MetaType;
    };
    posts?: {
      data?: PostType[] | null;
      meta?: MetaType;
    };
    users: {
      data: UserType[] | null;
      meta?: MetaType;
    };
  } | null;
  error?: ErrorType;
}
