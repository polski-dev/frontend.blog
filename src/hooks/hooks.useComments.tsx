import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { articeGetListComments, ArticeGetListCommentsType, articeGetListCommentsInitialState, articeAddComments, ArticeAddCommentsType, articeAddCommentsInitialState } from "database/database.restAPI.index";

export default function useComments() {
  const { data: session } = useSession();
  const [readCommentToAdd, setReadCommentToAdd] = useState({ id: 0, type: "", comment: "" });

  useEffect(() => {
    const comment: string | null = window.localStorage.getItem("comment");
    setReadCommentToAdd(!!comment ? JSON.parse(comment) : { id: null, type: null, comment: null });
  }, []);

  const rememberAddComment: ({ comment, type, id }: { comment: string; type: string; id: number }) => void = ({ comment, type, id }: { comment: string; type: string; id: number }): void => {
    const localStorage = window.localStorage;
    localStorage?.setItem("comment", JSON.stringify({ comment, type, id }));
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
    if (!checkIfYouHaveToGiveComment() || !readCommentToAdd.comment.length)
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
      switch (readCommentToAdd?.type) {
        case "article":
          const res: ArticeAddCommentsType = await articeAddComments(readCommentToAdd?.id, readCommentToAdd.comment, `Bearer ${session?.jwt}`);
          console.log("pl");
          if (!!res.error?.message)
            return {
              data: null,
              error: {
                status: 400,
                name: "TypeError",
                message: `Application Error`,
                details: {
                  errors: [
                    {
                      path: [`ApplicationError`],
                      message: `Application Error on BackEnd`,
                      name: "ApplicationError",
                    },
                  ],
                },
              },
            };
          localStorage.removeItem("comment");
          setReadCommentToAdd({ id: 0, type: "", comment: "" });
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

  return { rememberAddComment, checkIfYouHaveToGiveComment, deleteGradeToGive, addComment, getListComment, readCommentToAdd, setReadCommentToAdd };
}
