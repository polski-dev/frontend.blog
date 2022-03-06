export interface MenuGradeType {
  gradeStats: {
    data:
      | {
          id: string;
          attributes: {
            voice: string;
          };
        }[]
      | [];
  };
  views: number;
  comments: number;
  id: number;
  type: string;
}
