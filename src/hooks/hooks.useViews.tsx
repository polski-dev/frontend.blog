import { useEffect, useCallback } from "react";
import { viewAddInPostFrontEnd } from "utils/query/posts/view";
import { ContentEnum } from "types/database/types.database.contentEnum";

export default function useViews({ id, typ }: { id?: number; typ?: ContentEnum }) {
  const rememberView = useCallback(() => {
    typ && id && window.localStorage?.setItem(`views-${typ}-${id}`, "true");
  }, [typ, id]);

  const remindView: () => boolean = useCallback((): boolean => {
    if (!id || !typ) return false;
    const saw: string | null = window.localStorage.getItem(`views-${typ}-${id}`);
    if (!!saw) return saw === "true" ? true : false;
    else return false;
  }, [id, typ]);

  const forgetView = useCallback(() => {
    if (!id || !typ) return null;
    window.localStorage.removeItem(`views-${typ}-${id}`);
  }, [id, typ]);

  useEffect(() => {
    (async () => {
      if (!remindView()) {
        viewAddInPostFrontEnd({ postId: id });
        rememberView();
      }
    })();
  }, [id, remindView, rememberView]);

  return { rememberView, remindView, forgetView };
}
