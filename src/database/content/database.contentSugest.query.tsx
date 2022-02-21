export const contentSugestQuery = `
query($page: Int!, $waitingroom: Boolean!, $search: String!, $sort: [String]!) {
  article(
    pagination: { start: $page }
    filters: {
      waitingroom: { eq: $waitingroom }
      title: { containsi: $search }
    }
    sort: $sort
  ) {
    data {
      id
      attributes {
        title
        cover {
          data {
            id
            attributes {
              formats
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
    sort: $sort
  ) {
    data {
      id
      attributes {
        title
        cover {
          data {
            id
            attributes {
              formats
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
    sort: $sort
  ) {
    data {
      id
      attributes {
        title
        cover {
          data {
            attributes {
              formats
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
    filters: { username: { containsi: $search } }
    sort: $sort
  ) {
    data {
      id
      attributes {
        username
        avatar {
          data {
            attributes {
              formats
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
