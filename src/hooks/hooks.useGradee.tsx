import { useSession } from "next-auth/react";
import { EnumType, EnumGrade } from "./hooks.useGradee.type";
import { articeAddGradeGet, ArticeAddGradeType } from "database/database.restAPI.index";

export default async function useGrade() {
  const { data: session } = useSession();

  const rememberChoiseGrade: ({ grade, type, id }: { grade: EnumGrade; type: EnumType; id: number }) => void = ({ grade, type, id }: { grade: EnumGrade; type: EnumType; id: number }): void => {
    const localStorage = window.localStorage;
    localStorage?.setItem("grade", JSON.stringify({ grade, type, id }));
  };

  const checkIfYouHaveToGiveGrade: () => boolean = (): boolean => {
    const localStorage = window.localStorage;
    const grade: string | null = localStorage?.getItem("grade");
    const data: { id: number; type: string; grade: string } | undefined = grade && JSON.parse(grade);
    return !!data;
  };

  const addGrade: () => Promise<ArticeAddGradeType | { err: boolean; msg: string }> = async (): Promise<ArticeAddGradeType | { err: boolean; msg: string }> => {
    if (!!session && !!session?.jwt) return { err: true, msg: "singin" };
    if (checkIfYouHaveToGiveGrade()) return { err: true, msg: "add grade" };
    const localStorage = window.localStorage;
    const grade: string | null = localStorage?.getItem("grade");
    const data: { id: number; type: string; grade: string } | undefined = grade && JSON.parse(grade);
    switch (data?.type) {
      case "article":
        return await articeAddGradeGet(data.id, `${session?.jwt}`, data?.grade);
      default:
        return { err: true, msg: "unexpected error" };
    }
  };

  return { rememberChoiseGrade, checkIfYouHaveToGiveGrade, addGrade };
}
