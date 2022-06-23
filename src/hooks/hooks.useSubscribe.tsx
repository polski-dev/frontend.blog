import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useAddCallBackURL from "./hooks.useCallBackURL";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { tagAmISubscribeFrontEnd, tagAmISubscribeState, TagAmISubscribeType, tagChangeSubscribeFrontEnd, TagChangeSubscribeType } from "utils/query/subscribe/tags";
import { userAmISubscribeFrontEnd, userAmISubscribeState, UserAmISubscribeType, userChangeSubscribeFrontEnd, UserChangeSubscribeType } from "utils/query/subscribe/users";

export default function useSubscribe({ id, typ }: { id?: number; typ?: ContentEnum }) {
  const amISubscribeStatusCreate = typ === ContentEnum.user ? userAmISubscribeState : tagAmISubscribeState;

  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useAddCallBackURL();
  const [amISubscribeStatus, setAmISubscribeStatus] = useState(amISubscribeStatusCreate);
  const [iAmWaitingForAnswerSubscribeStatus, setIAmWaitingForAnswerSubscribeStatus] = useState(true);

  const changeSubscribe = async (): Promise<UserChangeSubscribeType> => {
    setIAmWaitingForAnswerSubscribeStatus(true);
    if (!id || !typ) {
      setIAmWaitingForAnswerSubscribeStatus(false);
      return MessageErrorInAPI({ name: "Wrong field postId or voice", message: "Wrong field postId or voice or you need loged" });
    } else if (!session?.jwt) {
      setIAmWaitingForAnswerSubscribeStatus(false);
      if (typ === ContentEnum.user) addCallBackURL({ to: `/user/${id}`, name: "user" });
      else if (typ === ContentEnum.tag) addCallBackURL({ to: `/tag/${id}`, name: "tag" });
      router.replace("/auth/signin");
      return MessageErrorInAPI({ name: "You don't have access", message: "When you want add comment you need to be log" });
    } else {
      if (typ === ContentEnum.user) {
        const changeStatus: UserChangeSubscribeType = await userChangeSubscribeFrontEnd({ userId: id, authToken: `${session?.jwt}` });
        !changeStatus?.error && setAmISubscribeStatus(await userAmISubscribeFrontEnd({ userId: id, authToken: `${session?.jwt}` }));
      } else if (typ === ContentEnum.tag) {
        const changeStatus: TagChangeSubscribeType = await tagChangeSubscribeFrontEnd({ tagId: id, authToken: `${session?.jwt}` });
        !changeStatus?.error && setAmISubscribeStatus(await tagAmISubscribeFrontEnd({ tagId: id, authToken: `${session?.jwt}` }));
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
        } else if (typ === ContentEnum.tag) {
          const res: TagAmISubscribeType = await tagAmISubscribeFrontEnd({ tagId: id, authToken: `${session?.jwt}` });
          setAmISubscribeStatus(res);
        }
        setIAmWaitingForAnswerSubscribeStatus(false);
      })();
    } else if (!session?.jwt || !id || !typ) setIAmWaitingForAnswerSubscribeStatus(false);
  }, [id, typ, session]);

  return { changeSubscribe, amISubscribeStatus, iAmWaitingForAnswerSubscribeStatus };
}
