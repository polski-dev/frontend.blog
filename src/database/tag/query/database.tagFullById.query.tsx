export const tagFullByIdQuery = `
query($tagID: ID!) {
	tag(filters: { id: { eq: $tagID } }) {
	  data {
		id
		attributes {
		  title
		  views
		  description
		  cover {
			data {
			  id
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
		  total
		  pageSize
		  pageCount
		}
	  }
	}
  } 
 `;
