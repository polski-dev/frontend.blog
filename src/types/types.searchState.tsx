export type SliceSearchType = {
  data: any[];
  type: string;
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
  all: SliceSearchType;
  article: SliceSearchType;
  video: SliceSearchType;
  tag: SliceSearchType;
  user: SliceSearchType;
};
