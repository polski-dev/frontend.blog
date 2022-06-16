export interface UserStatisticsType {
  data?: {
    views: number;
    followingmes: number;
    followuser: number;
    comments: number;
    followTags: number;
    addGrade: number;
    addPosts: number;
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
