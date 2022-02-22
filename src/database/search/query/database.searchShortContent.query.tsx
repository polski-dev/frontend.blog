export const searchShortContentQuery = `
query($page: Int!, $waitingroom: Boolean!, $search: String!) {
  article(
    pagination: { start: $page }
    filters: {
      waitingroom: { eq: $waitingroom }
      title: { containsi: $search }
    }
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
    filters: {
      waitingroom: { eq: $waitingroom }
      title: { containsi: $search }
    }
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
  tag(
    pagination: { start: $page }
    filters: { title: { containsi: $search } }
  ) {
    data {
      id
      attributes {
        title
        views
        cover {
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
  user: usersPermissionsUsers(
    pagination: { start: $page }
    filters: { username: { containsi: $search } }
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
