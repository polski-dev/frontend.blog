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
  all: {
    home: SliceContentType;
    waitingRoom: SliceContentType;
  };
  article: {
    home: SliceContentType;
    waitingRoom: SliceContentType;
  };
  video: { home: SliceContentType; waitingRoom: SliceContentType };
};
