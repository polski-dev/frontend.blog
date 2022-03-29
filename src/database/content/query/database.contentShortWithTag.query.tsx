export const contentShortWithTagQuery = `
query($page: Int!, $tagId: ID!) {
  article(
    pagination: { start: $page }
    filters: { tags: { id: { eq: $tagId } } }
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
    filters: { tags: { id: { eq: $tagId } } }
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
  user: usersPermissionsUsers(
    pagination: { start: $page }
    filters: { followtags: { id: { eq: $tagId } } }
  ) {
    data {
      id
      attributes {
        username
        views
        createdAt
        avatar {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
  }
}
`;
