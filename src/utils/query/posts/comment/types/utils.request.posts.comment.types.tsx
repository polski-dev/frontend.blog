import { CommentType } from "types/database/types.database.comment";
import { ErrorType } from "types/database/types.database.error";
import { MetaType } from "types/database/types.database.meta";

export interface PostCommentAddType {
  data?: CommentType | null;
  error?: ErrorType;
}

export interface PostCommentsListType {
  data?: CommentType[] | null;
  error?: ErrorType;
  meta?: MetaType;
}
