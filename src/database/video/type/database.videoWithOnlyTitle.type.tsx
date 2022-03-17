export interface VideoWithOnlyTitleType {
  data: {
    video: {
      data:
        | {
            id: string;
            attributes: {
              title: string;
            };
          }[]
        | [];
      meta: {
        pagination: {
          page: number;
          total: number;
          pageSize: number;
          pageCount: number;
        };
      };
    };
  };
}
