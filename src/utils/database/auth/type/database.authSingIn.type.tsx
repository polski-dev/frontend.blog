export interface AuthSingInType {
  data: {
    login: {
      jwt: JsonWebKey;
      user: {
        id: string;
        blocked: false;
        username: string;
      };
    };
  } | null;
  errors?: [
    {
      message: string;
      extensions: {
        error: {
          name: string;
          message: string;
          details: any;
        };
        code: string;
      };
    }
  ];
}
