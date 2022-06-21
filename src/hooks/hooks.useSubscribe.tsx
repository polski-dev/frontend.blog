import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useAddCallBackURL from "./hooks.useCallBackURL";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { userAmISubscribeFrontEnd, userAmISubscribeState, UserAmISubscribeType } from "utils/query/user/subscribe";

export default function useSubscribe({ id, typ }: { id?: number; typ?: ContentEnum.user }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useAddCallBackURL();
  const [amISubscribeStatus, setAmISubscribeStatus] = useState(userAmISubscribeState);
  const [iAmWaitingForAnswerSubscribeStatus, setIAmWaitingForAnswerSubscribeStatus] = useState(true);

  // const raitingAdd = async ({ voice }: { voice?: RatingEnum }): Promise<RaitingAddInPostType> => {
  //   setIAmWaitingForAnswerRaigingsIsAdded(true);
  //   if (!postId || !voice) {
  //     setIAmWaitingForAnswerRaigingsIsAdded(false);
  //     return {
  //       data: null,
  //       error: {
  //         status: 400,
  //         name: "Wrong field postId or voice",
  //         message: "Wrong field postId or voice or you need loged",
  //         details: {},
  //       },
  //     };
  //   } else if (!session?.jwt) {
  //     setIAmWaitingForAnswerRaigingsIsAdded(false);
  //     addCallBackURL({ to: `/post/${postId}`, name: "post" });
  //     router.replace("/auth/signin");
  //     return {
  //       data: null,
  //       error: {
  //         status: 400,
  //         name: "You don't have access",
  //         message: "When you want add comment you need to be log",
  //         details: {},
  //       },
  //     };
  //   } else {
  //     const resAdd: RaitingAddInPostType = await raitingAddInPostFrontEnd({ postId, voice, authToken: `${session?.jwt}` });
  //     if (!resAdd?.error) {
  //       const res: RaitingUserInPostFindType = await raitingUserInPostFindFoundFrontEnd({ postId, userId: typeof session?.id === "string" ? parseInt(session?.id) : 0 });
  //       setRaitingAdded(res);
  //     }
  //     setIAmWaitingForAnswerRaigingsIsAdded(false);
  //     return resAdd;
  //   }
  // };

  // const raitingDelete = async (): Promise<RaitingDeleteInPostType> => {
  //   setIAmWaitingForAnswerRaigingsIsAdded(true);
  //   if (!postId) {
  //     setIAmWaitingForAnswerRaigingsIsAdded(false);
  //     return {
  //       data: null,
  //       error: {
  //         status: 400,
  //         name: "Wrong field postId ",
  //         message: "Wrong field postId or you need loged",
  //         details: {},
  //       },
  //     };
  //   } else if (!session?.jwt) {
  //     setIAmWaitingForAnswerRaigingsIsAdded(false);
  //     addCallBackURL({ to: `/post/${postId}`, name: "post" });
  //     router.replace("/auth/signin");
  //     return {
  //       data: null,
  //       error: {
  //         status: 400,
  //         name: "You don't have access",
  //         message: "When you want add comment you need to be log",
  //         details: {},
  //       },
  //     };
  //   } else {
  //     const resDel: RaitingDeleteInPostType = await raitingUserDeleteInPostFrontEnd({ postId, authToken: `${session?.jwt}` });
  //     if (!resDel?.error) {
  //       const res: RaitingUserInPostFindType = await raitingUserInPostFindFoundFrontEnd({ postId, userId: typeof session?.id === "string" ? parseInt(session?.id) : 0 });
  //       setRaitingAdded(res);
  //     }
  //     setIAmWaitingForAnswerRaigingsIsAdded(false);
  //     return resDel;
  //   }
  // };

  useEffect(() => {
    if (typeof session?.jwt === "string" && !!id && !!typ) {
      (async () => {
        if (typ === ContentEnum.user) {
          const res: UserAmISubscribeType = await userAmISubscribeFrontEnd({ userId: id, authToken: `${session?.jwt}` });
          setAmISubscribeStatus(res);
        }
        setIAmWaitingForAnswerSubscribeStatus(false);
      })();
    } else if (!session?.jwt || !id || !typ) setIAmWaitingForAnswerSubscribeStatus(false);
  }, [id, typ, session]);

  return { amISubscribeStatus, iAmWaitingForAnswerSubscribeStatus };
}
