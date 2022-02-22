export const searchShortTagQuery = `
query($page: Int!, $search: String!) {
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
}
`;
