import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { postCommentAddFrontEnd, PostCommentAddType } from "utils/query/posts/comment";

export default function useComments() {
  const { data: session } = useSession();
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);

  const rememberComment: ({ comment, postId }: { comment: string; postId: number }) => void = ({ comment, postId }: { comment: string; postId: number }): void => window.localStorage?.setItem(`comment-${postId}`, JSON.stringify({ comment, postId }));

  const remindComment = ({ postId }: { postId?: number }): null | { comment: string; postId: number } => {
    if (!postId) return null;
    const comment: string | null = window.localStorage.getItem(`comment-${postId}`);

    if (!!comment) return JSON.parse(comment);
    else return null;
  };

  const forgetComment = ({ postId }: { postId?: number }): null | void => {
    if (!postId) return null;
    window.localStorage.removeItem(`comment-${postId}`);
  };

  const addComment = async ({ postId, comment }: { postId?: number; comment?: string }): Promise<PostCommentAddType> => {
    setIamWaitingForAnswer(true);
    if (!postId && !comment && !session) {
      setIamWaitingForAnswer(false);
      return {
        data: null,
        error: {
          status: 400,
          name: "Wrong field or you not have access",
          message: "Wrong field idPost or comments or you need loged",
          details: {},
        },
      };
    } else {
      const res = await postCommentAddFrontEnd({ postId, comment, authToken: `${session?.jwt}` });
      if (!res?.error) forgetComment({ postId });
      return res;
    }
  };

  return { rememberComment, forgetComment, remindComment, addComment, iAmWaitingForAnswer, session };
}
