export const authSingInQuery = `
mutation($email: String!, $password: String!) {
	login(input: { identifier: $email, password: $password }) {
	  jwt
	  user {
		id
		blocked
        username
	  }
	}
  }  
`;
