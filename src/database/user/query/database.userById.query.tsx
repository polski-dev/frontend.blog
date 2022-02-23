export const userByIdQuery = `
query($id: ID!) {
	user: usersPermissionsUser(id: $id) {
	  data {
		attributes {
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
