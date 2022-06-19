export enum CommentApprovalStatusEnum {
  PENDING = "PENDING",
}

export interface CommentType {
  id: number;
  content: string;
  blocked: boolean;
  blockedThread: boolean;
  blockReason: null | boolean;
  removed: null | boolean;
  approvalStatus: CommentApprovalStatusEnum;
  related: string;
  createdAt: Date;
  updatedAt: Date;
  threadOf: null | boolean;
  author?: {
    id: number;
    name: string;
    email: string;
  };
}
