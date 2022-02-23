export const authSingUpQuery = `
mutation($username: String! $email: String! $password: String!) {
	register(input: {username: $username, email: $email, password: $password}){
		  user{
			  confirmed
		  }
	  }
  }
`;