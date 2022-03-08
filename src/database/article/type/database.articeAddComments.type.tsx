export interface ArticeAddCommentsType {
  data: {
    add: boolean;
    id: number;
    createdAt: string;
    description: string;
  } | null;
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
