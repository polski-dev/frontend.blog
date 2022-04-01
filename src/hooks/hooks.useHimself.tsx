import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useCallBackURL from "hooks/hooks.useCallBackURL";
import {
  userHimselfDataEditEmailGetPreview,
  userHimselfDataEditEmailInitialState,
  userHimselfDataEditPasswordGetPreview,
  userHimselfDataEditPasswordInitialState,
  userHimselfDataEditPublicGetPreview,
  userHimselfDataEditPublicInitialState,
  userHimselfDataGetPreview,
  userHimselfDataInitialState,
  userHimselfDeleteTypeGetPreview,
  userHimselfDeleteInitialState,
} from "database/database.restAPI.index";

export default function useHimself({ id, slug }: { id: number; slug?: string }) {
  const router: NextRouter = useRouter();
  const { data: session } = useSession();
  const { addCallBackURL } = useCallBackURL();

  return {};
}
