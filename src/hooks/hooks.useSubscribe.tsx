import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useAddCallBackURL from "./hooks.useCallBackURL";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { userAmISubscribeFrontEnd, userAmISubscribeState, UserAmISubscribeType, userChangeSubscribeFrontEnd, userChangeSubscribeState, UserChangeSubscribeType } from "utils/query/user/subscribe";

export default function useSubscribe({ id, typ }: { id?: number; typ?: ContentEnum.user }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useAddCallBackURL();
  const [amISubscribeStatus, setAmISubscribeStatus] = useState(userAmISubscribeState);
  const [iAmWaitingForAnswerSubscribeStatus, setIAmWaitingForAnswerSubscribeStatus] = useState(true);

  const changeSubscribe = async (): Promise<UserChangeSubscribeType> => {
    setIAmWaitingForAnswerSubscribeStatus(true);
    if (!id || !typ) {
      setIAmWaitingForAnswerSubscribeStatus(false);
      return MessageErrorInAPI({ name: "Wrong field postId or voice", message: "Wrong field postId or voice or you need loged" });
    } else if (!session?.jwt) {
      setIAmWaitingForAnswerSubscribeStatus(false);
      if (typ === ContentEnum.user) addCallBackURL({ to: `/post/${id}`, name: "post" });
      router.replace("/auth/signin");
      return MessageErrorInAPI({ name: "You don't have access", message: "When you want add comment you need to be log" });
    } else {
      if (typ === ContentEnum.user) {
        const changeStatus: UserChangeSubscribeType = await userChangeSubscribeFrontEnd({ userId: id, authToken: `${session?.jwt}` });
        !changeStatus?.error && setAmISubscribeStatus(await userAmISubscribeFrontEnd({ userId: id, authToken: `${session?.jwt}` }));
      }
      setIAmWaitingForAnswerSubscribeStatus(false);
      return MessageErrorInAPI({ name: "I can't recognize connetnt type", message: "I can't recognize connetnt type , add type when you want change subscribe status" });
    }
  };

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

  return { changeSubscribe, amISubscribeStatus, iAmWaitingForAnswerSubscribeStatus };
}
