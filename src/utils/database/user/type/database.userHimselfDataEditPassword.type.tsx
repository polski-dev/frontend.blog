export interface UserHimselfDataEditPasswordType {
  data?: {
    id: number;
    password: string;
  };
  error?: {
    status: number;
    name: string;
    message: string;
    details: {
      errors: [
        {
          path: string[];
          message: string;
          name: string;
        }
      ];
    };
  };
}
