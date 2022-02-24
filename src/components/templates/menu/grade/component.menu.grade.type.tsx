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
  idArticle: number;
}
