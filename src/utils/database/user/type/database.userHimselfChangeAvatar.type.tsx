export interface UserHimselfChangeAvatarType {
  data?: {
    id: number;
    username: string;
    avatar: {
      url: string;
    };
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
