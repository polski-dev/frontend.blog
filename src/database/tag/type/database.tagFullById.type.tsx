export interface TagFullByIdType {
  data?: {
    tag: {
      data: {
        id: string;
        attributes: {
          title: string;
          views: number;
          description: string;
          cover: {
            data: {
              id: string;
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
          total: number;
          pageSize: number;
          pageCount: number;
        };
      };
    };
  };
  error?: {
    errors: [
      {
        message: string;
        locations: [
          {
            line: number;
            column: number;
          }
        ];
        extensions: {
          code: string;
          exception: {
            stacktrace: string[];
          };
        };
      }
    ];
  };
}
