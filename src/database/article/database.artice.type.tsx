export interface ArticleWithOnlyTitleType {
  article: {
    data: {
      attributes: {
        title: string;
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
