export interface UserByIdType {
  data?: {
    user: {
      data: {
        attributes: {
          views: number;
          about: null | string;
          city: null | string;
          country: null | string;
          birthday: null | string;
          username: null | string;
          createdAt: null | string;
          github: null | string;
          tiktok: null | string;
          website: null | string;
          youtube: null | string;
          instagram: null | string;
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
  error?: {
    errors?: [
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
