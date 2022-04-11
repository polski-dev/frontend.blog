export interface UserHimselfDataType {
  data?: {
    id: number;
    username: string;
    email: string;
    avatar: {
      url?: string;
    };
    provider: string;
    password: string;
    resetPasswordToken: null;
    confirmationToken: null;
    confirmed: boolean;
    blocked: boolean;
    views: number;
    createdAt: Date;
    updatedAt: Date;
    about: string;
    website: string;
    youtube: string;
    instagram: string;
    tiktok: string;
    github: string;
    city: string;
    country: string;
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
