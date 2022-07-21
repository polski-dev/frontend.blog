import { PostType } from "types/database/types.database.post";
import { ErrorType } from "types/database/types.database.error";

export interface PostCreateType {
  data?: PostType | null;
  error?: ErrorType;
}
