export type SliceSearchType = {
  data: any[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type SearchStateType = {
  query: string;
  all: SliceSearchType;
  article: SliceSearchType;
  video: SliceSearchType;
  tag: SliceSearchType;
  user: SliceSearchType;
};
