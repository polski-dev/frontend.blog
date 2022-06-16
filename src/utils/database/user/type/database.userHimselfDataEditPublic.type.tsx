export interface UserHimselfDataEditPublicType {
  data?: {
    username?: string;
    about?: string;
    website?: string;
    youtube?: string;
    instagram?: string;
    tiktok?: string;
    github?: string;
    city?: string;
    country?: string;
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
