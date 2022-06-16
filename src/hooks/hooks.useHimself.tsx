import { useState, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import {
  UserHimselfDataEditEmailType,
  userHimselfDataEditEmailGetPreview,
  userHimselfDataEditEmailInitialState,
  UserHimselfDataEditPasswordType,
  userHimselfDataEditPasswordGetPreview,
  userHimselfDataEditPasswordInitialState,
  UserHimselfDataEditPublicType,
  userHimselfDataEditPublicGetPreview,
  userHimselfDataEditPublicInitialState,
  UserHimselfDataType,
  userHimselfDataGetPreview,
  userHimselfDataInitialState,
  UserHimselfDeleteType,
  userHimselfDeleteTypeGetPreview,
  userHimselfDeleteInitialState,
  UserHimselfChangeAvatarType,
  userHimselfChangeAvatarGetPreview,
  userHimselfChangeAvatarInitialState,
} from "utils/database/database.restAPI.index";

export default function useHimself() {
  const { data: session } = useSession();
  const router: NextRouter = useRouter();

  const [userHimselfData, setUserHimselfData] = useState(userHimselfDataInitialState);
  const [userHimselfDelete, setUserHimselfDelete] = useState(userHimselfDeleteInitialState);
  const [userHimselfAvatar, setUserHimselfAvatar] = useState(userHimselfChangeAvatarInitialState);
  const [userHimselfDataEditEmail, setUserHimselfDataEditEmail] = useState(userHimselfDataEditEmailInitialState);
  const [userHimselfDataEditPublic, setUserHimselfDataEditPublic] = useState(userHimselfDataEditPublicInitialState);
  const [userHimselfDataEditPassword, setUserHimselfDataEditPassword] = useState(userHimselfDataEditPasswordInitialState);

  useEffect(() => {
    if (session?.jwt)
      (async () => {
        const jwt = typeof session?.jwt === "string" ? session?.jwt : false;
        const data: UserHimselfDataType = jwt ? await userHimselfDataGetPreview(jwt) : userHimselfDataInitialState;
        setUserHimselfData(data);
      })();
  }, [session, userHimselfDataEditEmail, userHimselfDataEditPassword, userHimselfDataEditPublic, userHimselfDelete, userHimselfAvatar]);

  const userHimselfDataEditEmailGet: (email: string) => Promise<UserHimselfDataEditEmailType> = async (email: string): Promise<UserHimselfDataEditEmailType> => {
    const editEmailData = await userHimselfDataEditEmailGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", email);
    setUserHimselfDataEditEmail(editEmailData);
    return editEmailData;
  };

  const userHimselfDataEditPasswordGet: (password: string) => Promise<UserHimselfDataEditPasswordType> = async (password: string): Promise<UserHimselfDataEditPasswordType> => {
    const editPasswordData = await userHimselfDataEditPasswordGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", password);
    setUserHimselfDataEditPassword(editPasswordData);
    return editPasswordData;
  };

  const userHimselfDataEditPublicGet: ({
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
  }) => Promise<UserHimselfDataEditPublicType> = async ({
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
  }): Promise<UserHimselfDataEditPublicType> => {
    const publicData: UserHimselfDataEditPublicType = await userHimselfDataEditPublicGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", data);
    setUserHimselfDataEditPublic(publicData);

    return publicData;
  };

  const userHimselfDeleteGet: () => Promise<UserHimselfDeleteType> = async (): Promise<UserHimselfDeleteType> => {
    const deleteData: UserHimselfDeleteType = await userHimselfDeleteTypeGetPreview(typeof session?.jwt === "string" ? session?.jwt : "");
    setUserHimselfDelete(deleteData);
    if (deleteData?.data) {
      signOut();
      router.replace("/");
    }

    return deleteData;
  };

  const userHimselfChangeAvatarGet: ({ files }: { files: FileList }) => Promise<UserHimselfChangeAvatarType> = async ({ files }: { files: FileList }): Promise<UserHimselfChangeAvatarType> => {
    const ChangeAvatarStatus: UserHimselfChangeAvatarType = await userHimselfChangeAvatarGetPreview({ authorization: typeof session?.jwt === "string" ? session?.jwt : "", files });
    setUserHimselfAvatar(ChangeAvatarStatus);
    return ChangeAvatarStatus;
  };

  return { userHimselfData, userHimselfDataEditEmailGet, userHimselfDataEditPasswordGet, userHimselfDataEditPublicGet, userHimselfDeleteGet, userHimselfChangeAvatarGet };
}
