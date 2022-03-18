import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useSession } from "next-auth/react";
import useWindowData from "hooks/hooks.windowData";
import { articeGetListComments, ArticeGetListCommentsType, articeAddComments, ArticeAddCommentsType, videoGetListComments, VideoGetListCommentsType, videoAddComments, VideoAddCommentsType } from "database/database.restAPI.index";

export default function useComments({ data, type, id }: { data: ArticeGetListCommentsType; type: string; id: number }) {
  const { height } = useWindowData();
  const { data: session } = useSession();
  const [comments, setComments] = useState(data);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);
  const [readCommentToAdd, setReadCommentToAdd] = useState({ id: 0, type: "", comment: "" });
  const itemsRef: MutableRefObject<any> = useRef(null);

  const getListComment = async ({ type, id, page }: { type: string; id: number; page: number }): Promise<ArticeGetListCommentsType | VideoGetListCommentsType | void> => {
    switch (type) {
      case "article":
        return await articeGetListComments(id, page);
      case "video":
        return await videoGetListComments(id, page);
    }
  };

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

  const addComment: () => Promise<ArticeAddCommentsType | VideoAddCommentsType> = async (): Promise<ArticeAddCommentsType | VideoAddCommentsType> => {
    if (!checkIfYouHaveToGiveComment() || !readCommentToAdd?.comment?.length)
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
          const resArticeAddComments = await articeAddComments(readCommentToAdd?.id, readCommentToAdd.comment, `Bearer ${session?.jwt}`);
          if (!!resArticeAddComments.error?.message)
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
          return resArticeAddComments;

        case "video":
          const resVideoAddComments = await videoAddComments(readCommentToAdd?.id, readCommentToAdd.comment, `Bearer ${session?.jwt}`);
          if (!!resVideoAddComments.error?.message)
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
          return resVideoAddComments;

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

  useEffect(() => {
    getListComment({ id, type, page: 1 }).then((data: ArticeGetListCommentsType | VideoGetListCommentsType | void) => !!data && setComments(data));
  }, [id, type]);

  useEffect(() => {
    let check = setTimeout(() => {}, 200);

    function loadComment() {
      clearTimeout(check);
      check = setTimeout(() => {
        const heightEl: any = itemsRef.current.getBoundingClientRect().y;
        if ((!!comments.meta?.pagination.page ? comments.meta?.pagination.page : 1) < (!!comments.meta?.pagination.pageCount ? comments.meta?.pagination.pageCount : 1) && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 200);
    }

    document.addEventListener("scroll", loadComment);
    return () => document.removeEventListener("scroll", loadComment);
  }, [itemsRef, height, iAmWaitingForAnswer, comments]);

  useEffect(() => {
    if (iAmWaitingForAnswer) {
      getListComment({ id, type, page: (!!comments.meta?.pagination.page ? comments.meta?.pagination.page : 1) + 1 }).then((res: ArticeGetListCommentsType | VideoGetListCommentsType | void) => {
        if (!!res) {
          comments.data = [...comments.data, ...res.data];
          comments.meta = res.meta;
          setComments(comments);
        }
        setIamWaitingForAnswer(false);
      });
    }
  }, [id, type, comments, iAmWaitingForAnswer]);

  useEffect(() => {
    const comment: string | null = window.localStorage.getItem("comment");
    setReadCommentToAdd(!!comment ? JSON.parse(comment) : { id: null, type: null, comment: null });
  }, []);

  return { rememberAddComment, deleteGradeToGive, addComment, readCommentToAdd, itemsRef, comments, iAmWaitingForAnswer };
}
