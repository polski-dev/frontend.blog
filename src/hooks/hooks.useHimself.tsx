import FormData from "form-data";
import { useState, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
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
  userHimselfChangeAvatarGetPreview,
  userHimselfChangeAvatarInitialState,
  UserHimselfChangeAvatarType,
} from "database/database.restAPI.index";

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
        const data = jwt ? await userHimselfDataGetPreview(jwt) : userHimselfDataInitialState;
        setUserHimselfData(data);
      })();
  }, [session, userHimselfDataEditEmail, userHimselfDataEditPassword, userHimselfDataEditPublic, userHimselfDelete, userHimselfAvatar]);

  const userHimselfDataEditEmailGet: (email: string) => Promise<void> = async (email: string): Promise<void> => {
    const editEmailData = await userHimselfDataEditEmailGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", email);
    setUserHimselfDataEditEmail(editEmailData);
  };

  const userHimselfDataEditPasswordGet: (password: string) => Promise<void> = async (password: string): Promise<void> => {
    const editPasswordData = await userHimselfDataEditPasswordGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", password);
    setUserHimselfDataEditPassword(editPasswordData);
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
  }) => Promise<void> = async ({
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
  }): Promise<void> => {
    const publicData = await userHimselfDataEditPublicGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", data);
    setUserHimselfDataEditPublic(publicData);
  };

  const userHimselfDeleteGet: () => Promise<void> = async (): Promise<void> => {
    const deleteData = await userHimselfDeleteTypeGetPreview(typeof session?.jwt === "string" ? session?.jwt : "");
    setUserHimselfDelete(deleteData);
    if (deleteData?.data) {
      signOut();
      router.replace("/");
    }
  };

  const userHimselfChangeAvatarGet: ({ file }: { file: FormData }) => Promise<void> = async ({ file }: { file: FormData }): Promise<void> => {
    const ChangeAvatarStatus: UserHimselfChangeAvatarType = await userHimselfChangeAvatarGetPreview({ authorization: typeof session?.jwt === "string" ? session?.jwt : "", name: "avatar", file });
    setUserHimselfAvatar(ChangeAvatarStatus);
  };

  return { userHimselfData, userHimselfDataEditEmailGet, userHimselfDataEditPasswordGet, userHimselfDataEditPublicGet, userHimselfDeleteGet, userHimselfChangeAvatarGet };
}
