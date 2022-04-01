export interface UserHimselfDataEditPublicType {
  data?: {
    id: number;
    username: string;
    email: string;
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
