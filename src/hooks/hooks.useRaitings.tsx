import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useAddCallBackURL from "./hooks.useCallBackURL";
import { PostCountType } from "utils/query/posts/count";
import { RatingEnum } from "types/database/types.database.rating";
import { RaitingUserInPostFindType, raitingUserInPostFindFoundFrontEnd, raitingUserInPostFindState, raitingAddInPostFrontEnd, raitingUserDeleteInPostFrontEnd, RaitingAddInPostType, RaitingDeleteInPostType } from "utils/query/posts/rating";

export default function useRaitings({ postId, stats }: { postId?: number; stats?: PostCountType }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useAddCallBackURL();
  const [raitingAdded, setRaitingAdded] = useState(raitingUserInPostFindState);
  const [iAmWaitingForAnswerRaigingsIsAdded, setIAmWaitingForAnswerRaigingsIsAdded] = useState(true);

  const raitingAdd = async ({ voice }: { voice?: RatingEnum }): Promise<RaitingAddInPostType> => {
    setIAmWaitingForAnswerRaigingsIsAdded(true);
    if (!postId || !voice) {
      setIAmWaitingForAnswerRaigingsIsAdded(false);
      return {
        data: null,
        error: {
          status: 400,
          name: "Wrong field postId or voice",
          message: "Wrong field postId or voice or you need loged",
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
      const resAdd: RaitingAddInPostType = await raitingAddInPostFrontEnd({ postId, voice, authToken: `${session?.jwt}` });
      if (!resAdd?.error) {
        const res: RaitingUserInPostFindType = await raitingUserInPostFindFoundFrontEnd({ postId, userId: typeof session?.id === "string" ? parseInt(session?.id) : 0 });
        setRaitingAdded(res);
      }
      setIAmWaitingForAnswerRaigingsIsAdded(false);
      return resAdd;
    }
  };

  const raitingDelete = async (): Promise<RaitingDeleteInPostType> => {
    setIAmWaitingForAnswerRaigingsIsAdded(true);
    if (!postId) {
      setIAmWaitingForAnswerRaigingsIsAdded(false);
      return {
        data: null,
        error: {
          status: 400,
          name: "Wrong field postId ",
          message: "Wrong field postId or you need loged",
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
      const resDel: RaitingDeleteInPostType = await raitingUserDeleteInPostFrontEnd({ postId, authToken: `${session?.jwt}` });
      if (!resDel?.error) {
        const res: RaitingUserInPostFindType = await raitingUserInPostFindFoundFrontEnd({ postId, userId: typeof session?.id === "string" ? parseInt(session?.id) : 0 });
        setRaitingAdded(res);
      }
      setIAmWaitingForAnswerRaigingsIsAdded(false);
      return resDel;
    }
  };

  useEffect(() => {
    if (!!postId && !!session?.id && !!stats?.data?.ratings?.count) {
      (async () => {
        const res: RaitingUserInPostFindType = await raitingUserInPostFindFoundFrontEnd({ postId, userId: typeof session?.id === "string" ? parseInt(session?.id) : 0 });
        setRaitingAdded(res);
        setIAmWaitingForAnswerRaigingsIsAdded(false);
      })();
    } else if (!session?.id || stats?.data?.ratings?.count === 0) setIAmWaitingForAnswerRaigingsIsAdded(false);
  }, [postId, stats, session]);

  return { raitingAdd, raitingDelete, raitingAdded, iAmWaitingForAnswerRaigingsIsAdded };
}
