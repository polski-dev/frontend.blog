export interface UserSubscriptionToggleType {
  data?: {
    update: boolean;
    id: number | null;
    username: string | null;
  };
  error?: {
    errors?: [
      {
        message: string;
        locations: [
          {
            line: number;
            column: number;
          }
        ];
        extensions: {
          code: string;
          exception: {
            stacktrace: string[];
          };
        };
      }
    ];
  };
}
