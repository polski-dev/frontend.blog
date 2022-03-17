export interface VideoGetListCommentsItemType {
  add: boolean;
  id: number;
  createdAt: Date;
  description: string;
  author: {
    id: number;
    username: string;
    avatar: {
      url: string;
    };
  };
}

export interface VideoGetListCommentsType {
  data: VideoGetListCommentsItemType[];
  meta?: {
    pagination: {
      page: number;
      total: number;
      pageSize: number;
      pageCount: number;
    };
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details: {
      errors: [
        {
          path: string[];
          message: string;
          name: string;
        }
      ];
    };
  };
}
