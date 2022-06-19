import { PostsTypEnum } from "./types.database.post";

export enum CommentApprovalStatusEnum {
  PENDING = "PENDING",
}

export interface CommentRelatedtPostType {
  id: number;
  title: string;
  views: number;
  content: string;
  youtube: null | string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  typ: PostsTypEnum;
  uid: string;
}

export interface CommentType {
  id: number;
  content: string;
  blocked: boolean;
  blockedThread: boolean;
  blockReason: null | boolean;
  removed: null | boolean;
  approvalStatus: CommentApprovalStatusEnum;
  related: CommentRelatedtPostType | string;
  createdAt: Date;
  updatedAt: Date;
  threadOf: null | boolean;
  author?: {
    id: number;
    name: string;
    email: string;
  };
}
