export const countUserQuery = `
query {
	user: usersPermissionsUsers {
	  meta {
		pagination {
		  total
		}
	  }
	}
  }
`;
