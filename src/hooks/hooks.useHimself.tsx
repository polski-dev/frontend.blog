import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
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
  const { data: session } = useSession();
  const [userHimselfData, setUserHimselfData] = useState(userHimselfDataInitialState);
  const [userHimselfDataEditEmail, setUserHimselfDataEditEmail] = useState(userHimselfDataEditEmailInitialState);
  const [userHimselfDataEditPassword, setUserHimselfDataEditPassword] = useState(userHimselfDataEditPasswordInitialState);
  const [userHimselfDataEditPublic, setUserHimselfDataEditPublic] = useState(userHimselfDataEditPublicInitialState);
  const [userHimselfDelete, setUserHimselfDelete] = useState(userHimselfDeleteInitialState);

  useEffect(() => {
    if (!!session?.jwt)
      (async () => {
        const data = await userHimselfDataGetPreview(typeof session?.jwt === "string" ? session?.jwt : "");
        setUserHimselfData(data);
      })();
  }, [userHimselfData, session, userHimselfDataEditEmail, userHimselfDataEditPassword, userHimselfDataEditPublic, userHimselfDelete]);

  const userHimselfDataEditEmailGet = async (email: string) => {
    const editEmailData = await userHimselfDataEditEmailGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", email);
    setUserHimselfDataEditEmail(editEmailData);
    return editEmailData;
  };

  const userHimselfDataEditPasswordGet = async (password: string) => {
    const editPasswordData = await userHimselfDataEditPasswordGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", password);
    setUserHimselfDataEditPassword(editPasswordData);
    return editPasswordData;
  };

  const userHimselfDataEditPublicGet = async ({
    data,
  }: {
    data: {
      username?: string;
      about?: string;
      website?: string;
      youtube?: string;
      instagram?: string;
      tiktok?: string;
      github?: string;
      city?: string;
      country?: string;
    };
  }) => {
    const publicData = await userHimselfDataEditPublicGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", data);
    setUserHimselfDataEditPublic(publicData);
    return publicData;
  };

  const userHimselfDeleteGet = async () => {
    const deleteData = await userHimselfDeleteTypeGetPreview(typeof session?.jwt === "string" ? session?.jwt : "");
    setUserHimselfDelete(deleteData);
    return deleteData;
  };

  return { userHimselfData, userHimselfDataEditEmailGet, userHimselfDataEditPasswordGet, userHimselfDataEditPublicGet, userHimselfDeleteGet };
}
