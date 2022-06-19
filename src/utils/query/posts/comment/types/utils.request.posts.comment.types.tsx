import { CommentType } from "types/database/types.database.comment";
import { ErrorType } from "types/database/types.database.error";

export interface PostCommentAddType {
  data?: CommentType | null;
  error?: ErrorType;
}
