export type SliceTagType = {
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

export type AllTagStateType = {
  all: {
    home: SliceTagType;
  };
};
