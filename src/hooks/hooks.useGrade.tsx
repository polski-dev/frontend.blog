import { useState } from "react";
import { useSession } from "next-auth/react";
import { articeAddGradeGet, ArticeAddGradeType, articeAddGradeInitialState, videoAddGradeGet, VideoAddGradeType, videoAddGradeInitialState } from "database/database.restAPI.index";

export default function useGrade() {
  const { data: session } = useSession();
  const [allGrade, setAllGrade] = useState(articeAddGradeInitialState);

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
          const resArticeAddGrade = await articeAddGradeGet(data.id, `Bearer ${session?.jwt}`, data.grade);
          localStorage.removeItem("grande");
          return resArticeAddGrade;
        case "video":
          const resVideoAddGrade = await videoAddGradeGet(data.id, `Bearer ${session?.jwt}`, data.grade);
          localStorage.removeItem("grande");
          return resVideoAddGrade;
        default:
          return { data: null, err: true, msg: "unexpected error" };
      }
    }
  };

  const checkGrade: ({ type, id }: { type: string; id: number }) => Promise<ArticeAddGradeType | VideoAddGradeType> = async ({ type, id }: { type: string; id: number }): Promise<ArticeAddGradeType | VideoAddGradeType> => {
    if (!session) return { data: null, err: true, msg: "singin" };
    else {
      switch (type) {
        case "article":
          const resArticeAddGrade: ArticeAddGradeType | { data: null; err: boolean; msg: string } = await articeAddGradeGet(id, `Bearer ${session?.jwt}`, "");
          return resArticeAddGrade;
        case "video":
          const resVideoAddGrade: VideoAddGradeType | { data: null; err: boolean; msg: string } = await videoAddGradeGet(id, `Bearer ${session?.jwt}`, "");
          return resVideoAddGrade;
        default:
          return { data: null, err: true, msg: "unexpected error" };
      }
    }
  };

  const deleteGradeToGive: () => void = (): void => {
    const localStorage = window.localStorage;
    localStorage.removeItem("callBackURL");
  };

  return { rememberChoiseGrade, checkIfYouHaveToGiveGrade, addGrade, checkGrade, deleteGradeToGive };
}
