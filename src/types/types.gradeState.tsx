export type SliceGradeType = {
  id: number | null;
  type: string | null;
  grade: string | null;
};

export type GradeStateType = {
  data: SliceGradeType;
};
