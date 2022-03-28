export interface TagStatisticsType {
  data?: {
    addVideo: number;
    followuser: number;
    addArticle: number;
  } | null;
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
