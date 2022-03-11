export interface ArticeGetListCommentsType {
  data: {
    add: boolean;
    id: number;
    createdAt: string;
    description: string;
  } | null;
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
