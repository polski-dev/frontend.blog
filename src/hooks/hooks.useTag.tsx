import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import {
  tagSubscriptionStatusGet,
  tagSubscriptionStatusInitialState,
  TagSubscriptionStatusType,
  tagSubscriptionToggleGet,
  tagSubscriptionToggleInitialState,
  TagSubscriptionToggleType,
  tagStatisticsInitialState,
  tagStatisticsGet,
  TagStatisticsType,
} from "database/database.restAPI.index";

export default function useTag({ id, slug }: { id: number; slug?: string }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useCallBackURL();
  const [statusSubscription, setStatusSubsctiption] = useState(false);
  const [statistics, setStatistics] = useState(tagStatisticsInitialState);

  const subscriptionStatusGet = async (): Promise<TagSubscriptionStatusType> => {
    return !!session?.jwt ? await tagSubscriptionStatusGet(id, `${session?.jwt}`) : tagSubscriptionStatusInitialState;
  };

  const statisticsGet = async (): Promise<TagStatisticsType> => {
    return await tagStatisticsGet(id);
  };

  const subscriptionToggleGet = async (): Promise<TagSubscriptionToggleType | void> => {
    if (!session) {
      addCallBackURL({ name: "tag", to: slug || "" });
      router.replace("/auth/signin");
    } else {
      !!session?.jwt ? await tagSubscriptionToggleGet(id, `${session?.jwt}`) : tagSubscriptionToggleInitialState;
      const newStatus: TagSubscriptionStatusType = await subscriptionStatusGet();
      newStatus?.data?.status != statusSubscription && setStatusSubsctiption(!!newStatus?.data?.status);
    }
  };

  useEffect(() => {
    (async () => {
      const status = !!session?.jwt ? await tagSubscriptionStatusGet(id, `${session?.jwt}`) : tagSubscriptionStatusInitialState;
      status.data?.status && setStatusSubsctiption(status.data?.status);
    })();
  }, [session, id]);

  useEffect(() => {
    (async () => {
      const feshStatistics = await tagStatisticsGet(id);
      setStatistics(feshStatistics);
    })();
  }, [id]);

  return { statistics, statusSubscription, setStatusSubsctiption, subscriptionStatusGet, subscriptionToggleGet, statisticsGet };
}
