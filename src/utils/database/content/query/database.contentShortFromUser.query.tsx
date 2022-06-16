export const contentShortFromUserQuery = `
query($page: Int!, $userId: ID!) {
  article(
    pagination: { start: $page }
    filters: { author: { id: { eq: $userId } } }
  ) {
    data {
      id
      attributes {
        title
        views
        createdAt
        waitingroom
        cover {
          data {
            id
            attributes {
              url
            }
          }
        }
        tags {
          data {
            id
            attributes {
              title
            }
          }
        }
        comments {
          data {
            id
          }
        }
        grades {
          data {
            id
          }
        }
        author {
          data {
            id
            attributes {
              username
              avatar {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        total
        pageSize
        pageCount
      }
    }
  }
  video: videos(
    pagination: { start: $page }
    filters: { author: { id: { eq: $userId } } }
  ) {
    data {
      id
      attributes {
        title
        views
        createdAt
        waitingroom
        cover {
          data {
            id
            attributes {
              url
            }
          }
        }
        tags {
          data {
            id
            attributes {
              title
            }
          }
        }
        comments {
          data {
            id
          }
        }
        grades {
          data {
            id
          }
        }
        author {
          data {
            id

            attributes {
              username
              avatar {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        total
        pageSize
        pageCount
      }
    }
  }
}
`;
