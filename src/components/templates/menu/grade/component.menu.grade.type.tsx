export interface MenuGradeType {
  grade: {
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
  idArticle: number;
}
