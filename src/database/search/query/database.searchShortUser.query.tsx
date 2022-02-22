export const searchShortUserQuery = `
query($page: Int!, $search: String!) {
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
