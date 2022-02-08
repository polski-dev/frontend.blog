export type SliceContentType = {
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

export type AllContentStateType = {
  query: string;
  all: {
    home: SliceContentType;
  };
  article: {
    home: SliceContentType;
  };
  video: { home: SliceContentType };
};
