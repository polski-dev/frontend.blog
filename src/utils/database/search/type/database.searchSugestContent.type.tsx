export interface SearchSugestContentType {
  data: {
    all?: {
      data:
        | {
            id: string;
            type?: string;
            attributes: {
              views: number;
              title: string;
              cover: {
                data?: {
                  id: string;
                  attributes: {
                    formats?: { thumbnail: { url: string } };
                  };
                } | null;
              };
            };
          }[]
        | {
            id: string;
            type?: string;
            attributes: {
              views: number;
              title: string;
              cover?: {
                data?: {
                  id: string;
                  attributes: {
                    formats?: { thumbnail: { url: string } };
                  };
                } | null;
              };
            };
          }[]
        | {
            id: string;
            type?: string;
            attributes: {
              views: number;
              username: string;
              avatar: {
                data: {
                  attributes: {
                    formats?: { thumbnail: { url: string } };
                  };
                };
              };
            };
          }[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
    article: {
      data: {
        id: string;
        type?: string;
        attributes: {
          views: number;
          title: string;
          cover: {
            data?: {
              id: string;
              attributes: {
                formats?: { thumbnail: { url: string } };
              };
            } | null;
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
    video: {
      data: {
        id: string;
        type?: string;
        attributes: {
          views: number;
          title: string;
          cover: {
            data?: {
              id: string;
              attributes: {
                formats?: { thumbnail: { url: string } };
              };
            } | null;
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
    tag: {
      data: {
        id: string;
        type?: string;
        attributes: {
          views: number;
          title: string;
          cover?: {
            data?: {
              id: string;
              attributes: {
                formats?: { thumbnail: { url: string } };
              };
            } | null;
          };
        };
      }[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
    user: {
      data: {
        id: string;
        type?: string;
        attributes: {
          views: number;
          username: string;
          avatar: {
            data: {
              attributes: {
                formats?: { thumbnail: { url: string } };
              };
            };
          };
        };
      }[];
      meta: {
        pagination: {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
  };
}
