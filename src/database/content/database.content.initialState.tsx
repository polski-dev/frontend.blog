import { ContentType } from "./database.content.type";

export const contentInitialState: ContentType = {
  data: {
    article: {
      data: [
        {
          id: "",
          attributes: {
            title: "",
            views: 0,
            createdAt: "1990-01-22T00:00:00.633Z",
            waitingroom: true,
            cover: {
              data: {
                id: "",
                attributes: {
                  url: "",
                },
              },
            },
            tags: {
              data: [
                {
                  id: "",
                  attributes: {
                    title: "",
                  },
                },
              ],
            },
            comments: {
              data: [],
            },
            grades: {
              data: [],
            },
            author: {
              data: {
                id: "",
                attributes: {
                  username: "",
                  avatar: {
                    data: {
                      id: "",
                      attributes: {
                        url: "",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ],
      meta: {
        pagination: {
          page: 1,
          total: 0,
          pageSize: 10,
          pageCount: 1,
        },
      },
    },
    video: {
      data: [
        {
          id: "",
          attributes: {
            title: "",
            views: 0,
            createdAt: "1990-01-22T00:00:00.633Z",
            waitingroom: true,
            cover: {
              data: {
                id: "",
                attributes: {
                  url: "",
                },
              },
            },
            tags: {
              data: [
                {
                  id: "",
                  attributes: {
                    title: "",
                  },
                },
              ],
            },
            comments: {
              data: [],
            },
            grades: {
              data: [],
            },
            author: {
              data: {
                id: "",
                attributes: {
                  username: "",
                  avatar: {
                    data: {
                      id: "",
                      attributes: {
                        url: "",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ],
      meta: {
        pagination: {
          page: 1,
          total: 0,
          pageSize: 10,
          pageCount: 1,
        },
      },
    },
    tag: {
      data: [
        {
          id: "",
          attributes: {
            title: "",
            views: 0,
            cover: {
              data: null,
            },
          },
        },
      ],
    },
    user: {
      data: [
        {
          id: "",
          attributes: {
            username: "",
            views: 0,
            avatar: {
              data: {
                attributes: {
                  url: "",
                },
              },
            },
          },
        },
      ],
      meta: {
        pagination: {
          page: 1,
          total: 0,
          pageSize: 10,
          pageCount: 1,
        },
      },
    },
  },
};
