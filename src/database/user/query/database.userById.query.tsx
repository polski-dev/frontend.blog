export const userByIdQuery = `
query($id: ID!) {
	user: usersPermissionsUser(id: $id) {
	  data {
		attributes {
		  views
		  about
		  city
		  country
		  birthday
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
		}
	  }
	}
  }
 `;
