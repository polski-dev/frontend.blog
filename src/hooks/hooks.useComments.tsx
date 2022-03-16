import { useSession } from "next-auth/react";
import { articeGetListComments, ArticeGetListCommentsType, articeGetListCommentsInitialState, articeAddComments, ArticeAddCommentsType, articeAddCommentsInitialState } from "database/database.restAPI.index";

export default function useComments() {
  const { data: session } = useSession();

  const rememberAddComment: ({ comment, type, id }: { comment: string; type: string; id: number }) => void = ({ comment, type, id }: { comment: string; type: string; id: number }): void => {
    const localStorage = window.localStorage;
    localStorage?.setItem("comment", JSON.stringify({ comment, type, id }));
  };

  const readCommentToAdd: () => { id: number | null; type: string | null; comment: string | null } = (): { id: number | null; type: string | null; comment: string | null } => {
    const comment: string | null = window.localStorage.getItem("comment");
    return !!comment ? JSON.parse(comment) : { id: null, type: null, comment: null };
  };

  const checkIfYouHaveToGiveComment: () => boolean = (): boolean => {
    const localStorage = window.localStorage;
    const comment: string | null = localStorage?.getItem("comment");
    const data: { id: number; type: string; comment: string } | undefined = comment && JSON.parse(comment);

    return !!data;
  };

  const deleteGradeToGive: () => void = (): void => {
    const localStorage = window.localStorage;
    localStorage.removeItem("callBackURL");
  };

  const addComment: () => Promise<ArticeAddCommentsType> = async (): Promise<ArticeAddCommentsType> => {
    if (!checkIfYouHaveToGiveComment())
      return {
        data: null,
        error: {
          status: 400,
          name: "CommentError",
          message: `add comment`,
          details: {
            errors: [
              {
                path: [`comment`],
                message: `Field is a required comment`,
                name: "CommentError",
              },
            ],
          },
        },
      };
    else if (!session)
      return {
        data: null,
        error: {
          status: 400,
          name: "SessionError",
          message: `singin`,
          details: {
            errors: [
              {
                path: [`session`],
                message: `Field is a required session`,
                name: "SessionError",
              },
            ],
          },
        },
      };
    else {
      const localStorage = window.localStorage;
      const comment: string | null = localStorage?.getItem("comment");
      const data: { id: number; type: string; comment: string } | undefined = comment && JSON.parse(comment);

      switch (data?.type) {
        case "article":
          const res: ArticeAddCommentsType = await articeAddComments(data.id, data.comment, `Bearer ${session?.jwt}`);
          localStorage.removeItem("comment");

          return res;
        default:
          return {
            data: null,
            error: {
              status: 400,
              name: "TypeError",
              message: `I not understend type content`,
              details: {
                errors: [
                  {
                    path: [`TypeContent`],
                    message: `Field is a required content`,
                    name: "ContentError",
                  },
                ],
              },
            },
          };
      }
    }
  };

  const getListComment = async ({ type, id, page }: { type: string; id: number; page: number }): Promise<ArticeGetListCommentsType> => {
    switch (type) {
      case "article":
        return await articeGetListComments(id, page);
      default:
        return articeGetListCommentsInitialState;
    }
  };

  return { rememberAddComment, checkIfYouHaveToGiveComment, deleteGradeToGive, addComment, getListComment, readCommentToAdd };
}
