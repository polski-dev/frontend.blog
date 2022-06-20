import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useAddCallBackURL from "./hooks.useCallBackURL";
import { PostCountType } from "utils/query/posts/count";
import { RatingEnum } from "types/database/types.database.rating";
import { RaitingUserInPostFindType, raitingUserInPostFindFoundFrontEnd, raitingUserInPostFindState } from "utils/query/posts/raiting";

export default function useRaitings({ postId, stats }: { postId?: number; stats?: PostCountType }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useAddCallBackURL();
  const [raitingAdded, setRaitingAdded] = useState(raitingUserInPostFindState);
  const [iAmWaitingForAnswerRaigingsIsAdded, setIAmWaitingForAnswerRaigingsIsAdded] = useState(true);

  const addRaiting = async ({ raiting }: { raiting?: RatingEnum }): Promise<RaitingUserInPostFindType> => {
    setIAmWaitingForAnswerRaigingsIsAdded(true);
    if (!postId || !raiting) {
      setIAmWaitingForAnswerRaigingsIsAdded(false);
      return {
        data: null,
        error: {
          status: 400,
          name: "Wrong field postId or raiting",
          message: "Wrong field idPost or raiting or you need loged",
          details: {},
        },
      };
    } else if (!session?.jwt) {
      setIAmWaitingForAnswerRaigingsIsAdded(false);
      addCallBackURL({ to: `/post/${postId}`, name: "post" });
      router.replace("/auth/signin");
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
      // const res = await postCommentAddFrontEnd({ postId, comment, authToken: `${session?.jwt}` });
      //   !!res.data && setIamWaitingForAnswerAddRaiting(false);
      //  if (!res?.error) forgetComment();
      //  return res;
      //  }
      return {
        data: null,
        error: {
          status: 400,
          name: "You don't have access",
          message: "When you want add comment you need to be log",
          details: {},
        },
      };
    }
  };

  useEffect(() => {
    if (!!postId && !!session?.id && !!stats?.data?.ratings?.count) {
      (async () => {
        const res: RaitingUserInPostFindType = await raitingUserInPostFindFoundFrontEnd({ postId, userId: typeof session?.id === "string" ? parseInt(session?.id) : 0 });
        setRaitingAdded(res);
        setIAmWaitingForAnswerRaigingsIsAdded(false);
      })();
    } else if (!session?.id) setIAmWaitingForAnswerRaigingsIsAdded(false);
  }, [postId, stats, session]);

  return { addRaiting, raitingAdded, iAmWaitingForAnswerRaigingsIsAdded };
}
