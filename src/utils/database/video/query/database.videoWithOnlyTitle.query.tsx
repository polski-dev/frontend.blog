export const videoWithOnlyTitleQuery = `
query($page: Int!) {
	video: videos(pagination: { start: $page }) {
	  data {
		id
		attributes {
		  title
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
