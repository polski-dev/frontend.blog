import { useSession } from "next-auth/react";
import useWindowData from "hooks/hooks.windowData";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { postCommentAddFrontEnd, PostCommentAddType, postCommentsListState, postCommentsListFrontEnd, PostCommentsListType } from "utils/query/posts/comment";

export default function useComments({ postId = 0, count = 0 }: { postId?: number; count?: number }) {
  const { height } = useWindowData();
  const { data: session } = useSession();
  const commentRef: MutableRefObject<any> = useRef(null);
  const [commentsList, setCommentsList] = useState(postCommentsListState);
  const [iAmWaitingForAnswerAddComent, setIamWaitingForAnswerAddComent] = useState(false);
  const [iAmWaitingForAnswerCommentsList, setIAmWaitingForAnswerCommentsList] = useState(false);

  const rememberComment: ({ comment }: { comment: string }) => void = ({ comment }: { comment: string }): void => {
    postId && window.localStorage?.setItem(`comment-${postId}`, JSON.stringify({ comment, postId }));
  };

  const remindComment = (): null | { comment: string; postId: number } => {
    if (!postId) return null;
    const comment: string | null = window.localStorage.getItem(`comment-${postId}`);

    if (!!comment) return JSON.parse(comment);
    else return null;
  };

  const forgetComment = (): null | void => {
    if (!postId) return null;
    window.localStorage.removeItem(`comment-${postId}`);
  };

  const addComment = async ({ comment }: { comment?: string }): Promise<PostCommentAddType> => {
    setIamWaitingForAnswerAddComent(true);
    if (!postId || !comment) {
      setIamWaitingForAnswerAddComent(false);
      return {
        data: null,
        error: {
          status: 400,
          name: "Wrong field postId or comment",
          message: "Wrong field idPost or comments or you need loged",
          details: {},
        },
      };
    } else if (!session?.jwt) {
      setIamWaitingForAnswerAddComent(false);
      return {
        data: null,
        error: {
          status: 400,
          name: "You don't have access",
          message: "When you want add comment you need to be log",
          details: {},
        },
      };
    } else {
      const res = await postCommentAddFrontEnd({ postId, comment, authToken: `${session?.jwt}` });
      !!res.data && setIamWaitingForAnswerAddComent(false);

      if (!res?.error) forgetComment();
      return res;
    }
  };

  useEffect(() => {
    if (!!postId && !commentsList?.data)
      (async () => {
        setIAmWaitingForAnswerCommentsList(true);
        const res: PostCommentsListType = await postCommentsListFrontEnd({ postId, page: 1 });
        setIAmWaitingForAnswerCommentsList(false);
        setCommentsList(res);
      })();
  }, [postId, commentsList]);

  useEffect(() => {
    let check = setTimeout(() => {}, 200);

    function loadArticle() {
      clearTimeout(check);

      check = setTimeout(() => {
        const heightEl: any = commentRef?.current?.getBoundingClientRect().y;
        if ((commentsList?.meta?.pagination?.page || 1) < Math.ceil(count / (commentsList?.meta?.pagination?.pageSize || 1)) && !iAmWaitingForAnswerCommentsList && heightEl - height < 0) setIAmWaitingForAnswerCommentsList(true);
      }, 200);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [commentRef, height, iAmWaitingForAnswerCommentsList, commentsList, count]);

  useEffect(() => {
    (async (): Promise<void> => {
      if (iAmWaitingForAnswerCommentsList && commentsList?.meta?.pagination?.page) {
        let res: PostCommentsListType = await postCommentsListFrontEnd({ postId, page: commentsList?.meta?.pagination?.page + 1 });

        if (res?.data) {
          if (res?.data && commentsList?.data) res.data = [...commentsList?.data, ...res.data];
          setCommentsList(res);
          setIAmWaitingForAnswerCommentsList(false);
        } else alert("Upss.. Coś poszło nie tak :(");
      }
    })();
  }, [iAmWaitingForAnswerCommentsList, commentsList, postId]);

  return { rememberComment, forgetComment, remindComment, addComment, iAmWaitingForAnswerAddComent, iAmWaitingForAnswerCommentsList, session, commentsList, commentRef };
}
