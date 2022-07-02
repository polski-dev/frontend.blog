import { useState, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import { userDataPublicReadState, userDataPublicReadFrontEnd, UserDataPublicReadType } from "utils/query/users/data";

export default function useHimself() {
  const { data: session } = useSession();
  const router: NextRouter = useRouter();

  const [userDataPublic, setUserDataPublic] = useState(userDataPublicReadState);
  // const [userHimselfDelete, setUserHimselfDelete] = useState(userHimselfDeleteInitialState);
  // const [userHimselfAvatar, setUserHimselfAvatar] = useState(userHimselfChangeAvatarInitialState);
  // const [userHimselfDataEditEmail, setUserHimselfDataEditEmail] = useState(userHimselfDataEditEmailInitialState);
  // const [userHimselfDataEditPublic, setUserHimselfDataEditPublic] = useState(userHimselfDataEditPublicInitialState);
  // const [userHimselfDataEditPassword, setUserHimselfDataEditPassword] = useState(userHimselfDataEditPasswordInitialState);

  useEffect(() => {
    if (session?.jwt)
      (async () => {
        const jwt: string = typeof session?.jwt === "string" ? session?.jwt : "";
        if (!!jwt.length) {
          const data: UserDataPublicReadType = await userDataPublicReadFrontEnd({ authToken: jwt });
          console.log(data, "data");
          !data?.error && setUserDataPublic(data);
        }
      })();
  }, [session]);

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

  // const userHimselfDataEditPublicGet: ({
  //   data,
  // }: {
  //   data: {
  //     username?: string;
  //     about?: string;
  //     website?: string;
  //     youtube?: string;
  //     instagram?: string;
  //     tiktok?: string;
  //     github?: string;
  //     city?: string;
  //     country?: string;
  //   };
  // }) => Promise<UserHimselfDataEditPublicType> = async ({
  //   data,
  // }: {
  //   data: {
  //     username?: string;
  //     about?: string;
  //     website?: string;
  //     youtube?: string;
  //     instagram?: string;
  //     tiktok?: string;
  //     github?: string;
  //     city?: string;
  //     country?: string;
  //   };
  // }): Promise<UserHimselfDataEditPublicType> => {
  //   const publicData: UserHimselfDataEditPublicType = await userHimselfDataEditPublicGetPreview(typeof session?.jwt === "string" ? session?.jwt : "", data);
  //   setUserHimselfDataEditPublic(publicData);

  //   return publicData;
  // };

  // const userHimselfDeleteGet: () => Promise<UserHimselfDeleteType> = async (): Promise<UserHimselfDeleteType> => {
  //   const deleteData: UserHimselfDeleteType = await userHimselfDeleteTypeGetPreview(typeof session?.jwt === "string" ? session?.jwt : "");
  //   setUserHimselfDelete(deleteData);
  //   if (deleteData?.data) {
  //     signOut();
  //     router.replace("/");
  //   }

  //   return deleteData;
  // };

  // const userHimselfChangeAvatarGet: ({ files }: { files: FileList }) => Promise<UserHimselfChangeAvatarType> = async ({ files }: { files: FileList }): Promise<UserHimselfChangeAvatarType> => {
  //   const ChangeAvatarStatus: UserHimselfChangeAvatarType = await userHimselfChangeAvatarGetPreview({ authorization: typeof session?.jwt === "string" ? session?.jwt : "", files });
  //   setUserHimselfAvatar(ChangeAvatarStatus);
  //   return ChangeAvatarStatus;
  // };

  return { userDataPublic };
}
