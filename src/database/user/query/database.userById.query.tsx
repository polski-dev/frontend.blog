export const userByIdQuery = `
query($id: ID!) {
	user: usersPermissionsUser(id: $id) {
	  data {
		attributes {
		  views
		  about
		  city
		  country
		  username
		  createdAt
		  github
		  tiktok
		  website
		  youtube
		  instagram
		  avatar {
			data {
			  attributes {
				url
			  }
			}
		  }
		  skilks {
			data {
			  id
			  attributes {
				title
			  }
			}
		  }
		  learn {
			data {
			  id
			  attributes {
				title
			  }
			}
		  }
		}
	  }
	}
  }  
 `;
