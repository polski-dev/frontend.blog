export interface SearchShortTagType {
  data: {
    tag: {
      data: {
        id: string;
        attributes: {
          title: string;
          views: number;
          createdAt: string;
          cover?: {
            data?: {
              id: string;
              attributes: {
                url: string;
              };
            } | null;
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
  };
}
