export interface UserGetListType {
  data: {
    usersPermissionsUsers: {
      data: {
        id: string;
        attributes: {
          username: string;
        };
      }[];
      meta: {
        pagination: {
          page: number;
          total: number;
          pageSize: number;
          pageCount: number;
        };
      };
    };
  };
}
