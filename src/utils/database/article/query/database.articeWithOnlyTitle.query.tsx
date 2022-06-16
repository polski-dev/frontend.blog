export const articeWithOnlyTitleQuery = `
query($page: Int!) {
	article(pagination: { start: $page }) {
	  data {
		id
		attributes {
		  title
		}
	  }
	  meta {
		pagination {
		  pageCount
		}
	  }
	}
  }  
`;
