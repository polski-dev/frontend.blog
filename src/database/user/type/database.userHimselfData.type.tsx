export interface UserHimselfDataType {
  data?: {
    user: {
      data: {
        id: string;
        attributes: {
          views: number;
          about: null | string;
          city: null | string;
          country: null | string;
          username: string;
          createdAt: Date;
          github: null | string;
          tiktok: null | string;
          website: null | string;
          youtube: null | string;
          instagram: null | string;
          avatar: {
            data: {
              attributes: {
                url: null | string;
              };
            };
          };
          skilks: {
            data: {
              id: string;
              attributes: {
                title: string;
              };
            }[];
          };
          learn: {
            data: {
              id: string;
              attributes: {
                title: string;
              };
            }[];
          };
        };
      } | null;
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
