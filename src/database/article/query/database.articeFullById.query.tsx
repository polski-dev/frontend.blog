export const articeFullByIdQuery = `
query($id: ID!) {
	article: articles(id: $id) {
	  data {
		id
		attributes {
		  title
		  views
		  createdAt
		  waitingroom
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
