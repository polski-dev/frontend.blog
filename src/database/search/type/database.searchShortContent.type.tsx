export interface SearchShortContentType {
  all?: {
    data: (
      | {
          id: string;
          attributes: {
            title: string;
            views: number;
            createdAt: string;
            waitingroom: boolean;
            cover: {
              data?: {
                id: string;
                attributes: {
                  url: string;
                };
              } | null;
            };
            tags: {
              data?: {
                id: string;
                attributes: {
                  title: string;
                };
              }[];
            };
            comments: {
              data?: {
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
                  avatar?: {
                    data: {
                      id: string;
                      attributes: {
                        url: string;
                      };
                    } | null;
                  };
                };
              };
            };
          };
        }
      | {
          id: string;
          attributes: {
            title: string;
            views: number;
            createdAt: string;
            waitingroom: boolean;
            cover: {
              data?: {
                id: string;
                attributes: {
                  url: string;
                };
              } | null;
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
              data?: {
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
        }
      | {
          id: string;
          attributes: {
            title: string;
            views: number;
            createdAt: string;
            cover?: {
              data?: {
                id: string;
                attributes: {
                  url: string;
                };
              } | null;
            };
          };
        }
      | {
          id: string;
          attributes: {
            views: number;
            username: string;
            createdAt: string;
            avatar: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
          };
        }
    )[];
    meta: {
      pagination: {
        page: number;
        total: number;
        pageSize: number;
        pageCount: number;
      };
    };
  };
  article: {
    data: {
      id: string;
      attributes: {
        title: string;
        views: number;
        createdAt: string;
        waitingroom: boolean;
        cover: {
          data?: {
            id: string;
            attributes: {
              url: string;
            };
          } | null;
        };
        tags: {
          data?: {
            id: string;
            attributes: {
              title: string;
            };
          }[];
        };
        comments: {
          data?: {
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
              avatar?: {
                data: {
                  id: string;
                  attributes: {
                    url: string;
                  };
                } | null;
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
          data?: {
            id: string;
            attributes: {
              url: string;
            };
          } | null;
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
          data?: {
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
  tag: {
    data: {
      id: string;
      attributes: {
        title: string;
        views: number;
        createdAt: string;
        cover?: {
          data?: {
            id: string;
            attributes: {
              url: string;
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
      attributes: {
        username: string;
        views: number;
        createdAt: string;
        avatar: {
          data: {
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
}