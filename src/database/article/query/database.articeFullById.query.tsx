export const articeFullByIdQuery = `
query($id: ID!) {
	article: articles(id: $id) {
	  data {
		id
		attributes {
		  title
		  views
		  content
		  content
		  createdAt
		  waitingroom
		  cover {
			data {
			  attributes {
				url
			  }
			}
		  }
		  grades {
			data {
			  id
			  attributes {
				voice
			  }
			}
		  }
		  author {
			data {
			  id
			  attributes {
				username
				avatar {
				  data {
					attributes {
					  url
					}
				  }
				}
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
			  attributes {
				createdAt
				description
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
		  }
		}
	  }
	}
  }  
`;
