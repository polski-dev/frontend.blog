import { useSession } from "next-auth/react";
import { articeAddGradeGet, ArticeAddGradeType } from "database/database.restAPI.index";

export default function useGrade() {
  const { data: session } = useSession();

  const rememberChoiseGrade: ({ grade, type, id }: { grade: string; type: string; id: number }) => void = ({ grade, type, id }: { grade: string; type: string; id: number }): void => {
    const localStorage = window.localStorage;
    localStorage?.setItem("grade", JSON.stringify({ grade, type, id }));
  };

  const checkIfYouHaveToGiveGrade: () => boolean = (): boolean => {
    const localStorage = window.localStorage;
    const grade: string | null = localStorage?.getItem("grade");
    const data: { id: number; type: string; grade: string } | undefined = grade && JSON.parse(grade);

    return !!data;
  };

  const addGrade: () => Promise<ArticeAddGradeType> = async (): Promise<ArticeAddGradeType> => {
    if (!checkIfYouHaveToGiveGrade()) return { data: null, err: true, msg: "add grade" };
    else if (!session) return { data: null, err: true, msg: "singin" };
    else {
      const localStorage = window.localStorage;
      const grade: string | null = localStorage?.getItem("grade");
      const data: { id: number; type: string; grade: string } | undefined = grade && JSON.parse(grade);

      switch (data?.type) {
        case "article":
          const res = await articeAddGradeGet(data?.id, `Bearer ${session?.jwt}`, data?.grade);
          localStorage.removeItem("grande");
          return res;
        default:
          return { data: null, err: true, msg: "unexpected error" };
      }
    }
  };

  const checkGrade: ({ type, id }: { type: string; id: number }) => Promise<ArticeAddGradeType> = async ({ type, id }: { type: string; id: number }): Promise<ArticeAddGradeType> => {
    if (!session) return { data: null, err: true, msg: "singin" };
    else {
      switch (type) {
        case "article":
          const res: ArticeAddGradeType | { data: null; err: boolean; msg: string } = await articeAddGradeGet(id, `Bearer ${session?.jwt}`, "");
          return res;
        default:
          return { data: null, err: true, msg: "unexpected error" };
      }
    }
  };

  return { rememberChoiseGrade, checkIfYouHaveToGiveGrade, addGrade, checkGrade };
}
