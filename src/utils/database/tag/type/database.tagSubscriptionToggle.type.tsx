export interface TagSubscriptionToggleType {
  data?: {
    update: boolean;
    id: number | null;
    title: string | null;
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
