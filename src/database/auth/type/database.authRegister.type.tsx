export interface AuthRegisterType {
  data: {
    register: {
      user: {
        confirmed: boolean;
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
