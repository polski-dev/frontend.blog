export interface VideoAddGradeType {
  data: {
    voice: string;
    update: boolean;
  } | null;
  err: boolean;
  msg: string | null;
}
