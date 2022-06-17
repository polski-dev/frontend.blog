export interface ErrorType {
  status: number; // HTTP status
  name: string; // Strapi error name ('ApplicationError' or 'ValidationError')
  message: string; // A human reable error message
  details: {
    errors?: {
      path: string[];
      message: string;
      name: string;
    }[];
  };
}
