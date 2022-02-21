export const articleWithOnlyTitleQuery = `
query($page: Int!) {
  article(pagination: {start: $page}) {
    data {
      attributes {
        title
      }
    }
    meta{
      pagination{
        page
        pageSize
        pageCount
        total
      }
    }
  }
}
`;
