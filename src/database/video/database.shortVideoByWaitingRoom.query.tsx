export const shortVideoByWaitingRoomQuery = `
query($page: Int! $waitingroom: Boolean!) {
  video: videos(pagination: {start: $page}, filters: {waitingroom: {eq: $waitingroom}}) {
	data {
		id
		attributes {
		  title
		  views
		  createdAt
		  waitingroom
		  cover {
			data {
			  id
			  attributes {
				url
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
			}
		  }
		  grades {
			data {
			  id
			}
		  }
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
	  meta {
		pagination {
		  page
		  total
		  pageSize
		  pageCount
		}
	  }
	}
  }`;
