export interface CommentsType {
  data:
    | {
        id: string;
        attributes: {
          createdAt: Date;
          description: string;
          author: {
            data: {
              id: string;
              attributes: {
                username: string;
                avatar: {
                  data: {
                    id: string;
                    attributes: {
                      url: string;
                    };
                  };
                };
              };
            };
          };
        };
      }[]
    | [];
}
