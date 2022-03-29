export interface ContentShortWithTagType {
  data: {
    all?: {
      data:
        | {
            id: string;
            attributes: {
              title: string;
              views: number;
              createdAt: string;
              waitingroom: boolean;
              cover: {
                data: {
                  id: string;
                  attributes: {
                    url: string;
                  };
                };
              };
              tags: {
                data: [
                  {
                    id: string;
                    attributes: {
                      title: string;
                    };
                  }
                ];
              };
              comments: {
                data: {
                  id: string;
                }[];
              };
              grades: {
                data: {
                  id: string;
                }[];
              };
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
        | {
            id: string;
            attributes: {
              title: string;
              views: number;
              createdAt: string;
              waitingroom: boolean;
              cover: {
                data: {
                  id: string;
                  attributes: {
                    url: string;
                  };
                };
              };
              tags: {
                data: [
                  {
                    id: string;
                    attributes: {
                      title: string;
                    };
                  }
                ];
              };
              comments: {
                data: [];
              };
              grades: {
                data: [];
              };
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
        | {
            id: string;
            attributes: {
              username: string;
              views: number;
              createdAt: string;
              avatar: {
                data: {
                  id: string;
                  attributes: {
                    url: string;
                  };
                };
              };
            };
          }[]
        | {}[];
      meta: {
        pagination: {
          page: number;
          total: number;
          pageSize: number;
          pageCount: number;
        };
      };
    };
    article?: {
      data: {
        id: string;
        attributes: {
          title: string;
          views: number;
          createdAt: string;
          waitingroom: boolean;
          cover: {
            data: {
              id: string;
              attributes: {
                url: string;
              };
            };
          };
          tags: {
            data: [
              {
                id: string;
                attributes: {
                  title: string;
                };
              }
            ];
          };
          comments: {
            data: {
              id: string;
            }[];
          };
          grades: {
            data: {
              id: string;
            }[];
          };
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
        attributes: {
          title: string;
          views: number;
          createdAt: string;
          waitingroom: boolean;
          cover: {
            data: {
              id: string;
              attributes: {
                url: string;
              };
            };
          };
          tags: {
            data: [
              {
                id: string;
                attributes: {
                  title: string;
                };
              }
            ];
          };
          comments: {
            data: [];
          };
          grades: {
            data: [];
          };
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
    users?: {
      data: {
        id: string;
        attributes: {
          username: string;
          views: number;
          createdAt: string;
          avatar: {
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
          pageSize: number;
          pageCount: number;
          total: number;
        };
      };
    };
  };
}
