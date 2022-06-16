export const tagWithOnlyTitleQuery = `
query($page: Int!, $sort: [String]!) {
	tag(
	  pagination: { start: $page },
	  sort: $sort
	) {
	  data {
		id
		attributes {
		  title
		}
	  }
	  meta{
		pagination{
		  page
		  total
		  pageSize
		  pageCount
		}
	  }
	}
  }
 `;
