export interface ArticeAddType {
  data: {
    id: number;
    title: string;
    waitingroom: boolean;
    views: number;
    content: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    publishedAt: Date | null;
    type: string;
    youtube: string;
  } | null;
  error?: {
    status: number;
    name: string;
    message: string;
    details: {
      errors: {
        path: string[];
        message: string;
        name: string;
      }[];
    };
  };
}
