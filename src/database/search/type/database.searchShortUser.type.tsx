export interface SearchShortUserType {
  user: {
    data: {
      id: string;
      attributes: {
        username: string;
        views: number;
        createdAt: string;
        avatar: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    }[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  };
}
