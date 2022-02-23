export interface UserByIdType {
  data: {
    user: {
      data: {
        attributes: {
          avatar: {
            data: {
              attributes: {
                url: string;
              };
            };
          };
        };
      } | null;
    };
    errors?: [
      {
        message: string;
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
