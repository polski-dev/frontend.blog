import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import {
  userSubscriptionStatusGet,
  userSubscriptionStatusInitialState,
  UserSubscriptionStatusType,
  userSubscriptionToggleGet,
  userSubscriptionToggleInitialState,
  UserSubscriptionToggleType,
  userStatisticsInitialState,
  userStatisticsGet,
  UserStatisticsType,
} from "database/database.restAPI.index";

export default function useUser({ type, id, slug }: { type: string; id: number; slug?: string }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useCallBackURL();
  const [statusSubscription, setStatusSubsctiption] = useState(false);
  const [statistics, setStatistics] = useState(userStatisticsInitialState);

  const subscriptionStatusGet = async (): Promise<UserSubscriptionStatusType> => {
    switch (type) {
      case "user":
        return !!session?.jwt ? await userSubscriptionStatusGet(id, `${session?.jwt}`) : userSubscriptionStatusInitialState;
      default:
        return userSubscriptionStatusInitialState;
    }
  };

  const statisticsGet = async (): Promise<UserStatisticsType> => {
    switch (type) {
      case "user":
        return await userStatisticsGet(id);
      default:
        return userStatisticsInitialState;
    }
  };

  const subscriptionToggleGet = async (): Promise<UserSubscriptionToggleType | void> => {
    if (!session) {
      addCallBackURL({ name: "user", to: slug || "" });
      router.replace("/auth/signin");
    } else
      switch (type) {
        case "user":
          !!session?.jwt ? await userSubscriptionToggleGet(id, `${session?.jwt}`) : userSubscriptionToggleInitialState;
          const newStatus: UserSubscriptionStatusType = await subscriptionStatusGet();
          newStatus?.data?.status != statusSubscription && setStatusSubsctiption(!!newStatus?.data?.status);
          break;
      }
  };

  useEffect(() => {
    switch (type) {
      case "user":
        (async () => {
          const status = !!session?.jwt ? await userSubscriptionStatusGet(id, `${session?.jwt}`) : userSubscriptionStatusInitialState;
          status.data?.status && setStatusSubsctiption(status.data?.status);
        })();
        break;
    }
  }, [session, id, type]);

  useEffect(() => {
    (async () => {
      const feshStatistics = await userStatisticsGet(id);
      setStatistics(feshStatistics);
    })();
  }, [id]);

  return { statistics, statusSubscription, setStatusSubsctiption, subscriptionStatusGet, subscriptionToggleGet, statisticsGet };
}
