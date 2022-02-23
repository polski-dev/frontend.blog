export interface ArticeFullByIdType {
  data: {
    article: {
      data: {
        id: string;
        attributes: {
          title: string;
          views: number;
          createdAt: string;
          waitingroom: boolean;
          grades: {
            data:
              | {
                  id: string;
                  attributes: {
                    voice: string;
                  };
                }[]
              | [];
          };
          author: {
            data: {
              attributes: {
                username: string;
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
          tags: {
            data:
              | {
                  id: string;
                  attributes: {
                    title: string;
                  };
                }[]
              | [];
          };
          comments: {
            data:
              | {
                  id: string;
                  attributes: {
                    createdAt: string;
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
          };
        };
      };
    };
  };
}
