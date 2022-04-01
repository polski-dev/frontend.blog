export interface UserHimselfDataEditEmailType {
  data?: {
    id: number;
    email: string;
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
