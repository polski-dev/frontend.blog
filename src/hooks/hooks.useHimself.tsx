import { useSession, signOut } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { userDataPublicReadState, userDataPublicReadFrontEnd, UserDataPublicReadType, userEmailReadState, userEmailReadFrontEnd, UserEmailReadType, userDataAvatarUpdateFrontEnd, UserDataAvatarUpdateType, userDataPublicUpdateFrontEnd, UserDataPublicUpdateType } from "utils/query/users/data";

export default function useHimself() {
  const { data: session } = useSession();
  const router: NextRouter = useRouter();

  const [userEmail, setUserEmail] = useState(userEmailReadState);
  const [userDataPublic, setUserDataPublic] = useState(userDataPublicReadState);

  // const [userHimselfDelete, setUserHimselfDelete] = useState(userHimselfDeleteInitialState);
  // const [userHimselfAvatar, setUserHimselfAvatar] = useState(userHimselfChangeAvatarInitialState);
  // const [userHimselfDataEditEmail, setUserHimselfDataEditEmail] = useState(userHimselfDataEditEmailInitialState);
  // const [userHimselfDataEditPublic, setUserHimselfDataEditPublic] = useState(userHimselfDataEditPublicInitialState);
  // const [userHimselfDataEditPassword, setUserHimselfDataEditPassword] = useState(userHimselfDataEditPasswordInitialState);

  const userDataAvatarUpdate = async ({ file }: { file: File }): Promise<UserDataAvatarUpdateType> => {
    if (session?.jwt) {
      const res: UserDataAvatarUpdateType = await userDataAvatarUpdateFrontEnd({ file, authToken: `${session?.jwt}` });
      !res?.error && userDataRead();
      return res;
    } else return MessageErrorInAPI({ status: 400, name: "Mistake", message: "something walked wrong" });
  };

  const userDataRead = useCallback(async () => {
    if (session?.jwt) {
      const resUserDataPublicRead: UserDataPublicReadType = await userDataPublicReadFrontEnd({ authToken: `${session?.jwt}` });
      !resUserDataPublicRead?.error && setUserDataPublic(resUserDataPublicRead);
      const resUserEmailRead: UserEmailReadType = await userEmailReadFrontEnd({ authToken: `${session?.jwt}` });
      !resUserEmailRead?.error && setUserEmail(resUserEmailRead);
    }
  }, [session]);

  useEffect(() => {
    userDataRead();
  }, [userDataRead]);

  // const userHimselfDataEditEmailGet: (email: string) => Promise<UserHimselfDataEditEmailType> = async (email: string): Promise<UserHimselfDataEditEmailType> => {
  //   const editEmailData = await userHimselfDataEditEmailGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", email);
  //   setUserHimselfDataEditEmail(editEmailData);
  //   return editEmailData;
  // };

  // const userHimselfDataEditPasswordGet: (password: string) => Promise<UserHimselfDataEditPasswordType> = async (password: string): Promise<UserHimselfDataEditPasswordType> => {
  //   const editPasswordData = await userHimselfDataEditPasswordGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", password);
  //   setUserHimselfDataEditPassword(editPasswordData);
  //   return editPasswordData;
  // };

  const userDataPublicUpdate = async ({
    data,
  }: {
    data: {
      username: string;
      about: string;
      website: string;
      youtube: string;
      instagram: string;
      tiktok: string;
      github: string;
      city: string;
      country: string;
    };
  }): Promise<UserDataPublicUpdateType> => {
    if (session?.jwt) {
      const res: UserDataPublicUpdateType = await userDataPublicUpdateFrontEnd({ ...data, authToken: `${session?.jwt}` });
      !res?.error && userDataRead();
      return res;
    } else return MessageErrorInAPI({ status: 400, name: "Mistake", message: "something walked wrong" });
  };

  // const userHimselfDeleteGet: () => Promise<UserHimselfDeleteType> = async (): Promise<UserHimselfDeleteType> => {
  //   const deleteData: UserHimselfDeleteType = await userHimselfDeleteTypeGetPreview(typeof session?.jwt === "string" ? session?.jwt : "");
  //   setUserHimselfDelete(deleteData);
  //   if (deleteData?.data) {
  //     signOut();
  //     router.replace("/");
  //   }

  //   return deleteData;
  // };

  return { userDataPublic, userEmail, userDataAvatarUpdate, userDataPublicUpdate };
}
