import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import {
  userStatisticsGet,
  UserStatisticsType,
  userSubscriptionStatusGet,
  userSubscriptionStatusInitialState,
  UserSubscriptionStatusType,
  userSubscriptionToggleGet,
  userSubscriptionToggleInitialState,
  UserSubscriptionToggleType,
  userStatisticsInitialState,
} from "utils/database/database.restAPI.index";

export default function useSubscribe({ id, slug }: { id: number; slug?: string }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useCallBackURL();
  const [statusSubscription, setStatusSubsctiption] = useState(false);
  const [statistics, setStatistics] = useState(userStatisticsInitialState);

  const subscriptionStatusGet = async (): Promise<UserSubscriptionStatusType> => {
    return !!session?.jwt ? await userSubscriptionStatusGet(id, `${session?.jwt}`) : userSubscriptionStatusInitialState;
  };

  const statisticsGet = async (): Promise<UserStatisticsType> => {
    return await userStatisticsGet(id);
  };

  const subscriptionToggleGet = async (): Promise<UserSubscriptionToggleType | void> => {
    if (!session) {
      addCallBackURL({ name: "user", to: slug || "" });
      router.replace("/auth/signin");
    } else !!session?.jwt ? await userSubscriptionToggleGet(id, `${session?.jwt}`) : userSubscriptionToggleInitialState;
    const newStatus: UserSubscriptionStatusType = await subscriptionStatusGet();
    newStatus?.data?.status != statusSubscription && setStatusSubsctiption(!!newStatus?.data?.status);
  };

  useEffect(() => {
    (async () => {
      const status = !!session?.jwt ? await userSubscriptionStatusGet(id, `${session?.jwt}`) : userSubscriptionStatusInitialState;
      status.data?.status && setStatusSubsctiption(status.data?.status);
    })();
  }, [session, id]);

  useEffect(() => {
    (async () => {
      const feshStatistics = await userStatisticsGet(id);
      setStatistics(feshStatistics);
    })();
  }, [id]);

  return { session, statistics, statusSubscription, setStatusSubsctiption, subscriptionStatusGet, subscriptionToggleGet, statisticsGet };
}
