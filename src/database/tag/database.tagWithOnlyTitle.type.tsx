export interface TagWithOnlyTitleType {
  tag: {
    data: {
      id: string;
      attributes: {
        title: string;
      };
    }[];
    meta: {
      pagination: {
        page: number;
        total: number;
        pageSize: number;
        pageCount: number;
      };
    };
  };
}