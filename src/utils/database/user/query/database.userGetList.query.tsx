export const userGetListQuery = `
query($page: Int!) {
	usersPermissionsUsers(pagination: { limit: 10, start: $page }) {
	  data {
		id
		attributes {
		  username
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
  }
 `;
