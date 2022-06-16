export const tagFullByIdQuery = `
query($tagID: ID!) {
	tag: tags(id: $tagID) {
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
	}
  }
 `;
