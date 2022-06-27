import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useCallback } from "react";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import {
  userDataPublicReadState,
  userDataPublicReadFrontEnd,
  UserDataPublicReadType,
  userEmailReadState,
  userEmailReadFrontEnd,
  UserEmailReadType,
  userDataAvatarUpdateFrontEnd,
  UserDataAvatarUpdateType,
  userDataPublicUpdateFrontEnd,
  UserDataPublicUpdateType,
  userDataEmailUpdateFrontEnd,
  UserDataEmailUpdateType,
  userDataPasswordUpdateFrontEnd,
  UserDataPasswordUpdateType,
  userDataUserDeleteFrontEnd,
  UserDataUserDeleteType,
} from "utils/query/users/data";

export default function useHimself() {
  const { data: session } = useSession();

  const [userEmail, setUserEmail] = useState(userEmailReadState);
  const [userDataPublic, setUserDataPublic] = useState(userDataPublicReadState);

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

  const userDataEmailUpdate = async ({ email }: { email: string }): Promise<UserDataEmailUpdateType> => {
    if (session?.jwt) {
      const res: UserDataEmailUpdateType = await userDataEmailUpdateFrontEnd({ email, authToken: `${session?.jwt}` });
      !res?.error && userDataRead();
      return res;
    } else return MessageErrorInAPI({ status: 403, name: "ForbiddenError", message: "Forbidden" });
  };

  const userDataPasswordUpdate = async ({ password }: { password: string }): Promise<UserDataPasswordUpdateType> => {
    if (session?.jwt) {
      const res: UserDataPasswordUpdateType = await userDataPasswordUpdateFrontEnd({ password, authToken: `${session?.jwt}` });
      !res?.error && userDataRead();
      return res;
    } else return MessageErrorInAPI({ status: 403, name: "ForbiddenError", message: "Forbidden" });
  };

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

  const userDataUserDelete = async (): Promise<UserDataUserDeleteType> => {
    if (session?.jwt) {
      const res: UserDataUserDeleteType = await userDataUserDeleteFrontEnd({ authToken: `${session?.jwt}` });
      !res?.error && signOut();
      return res;
    } else return MessageErrorInAPI({ status: 403, name: "ForbiddenError", message: "Forbidden" });
  };

  useEffect(() => {
    userDataRead();
  }, [userDataRead]);

  return { userDataPublic, userEmail, userDataAvatarUpdate, userDataPublicUpdate, userDataEmailUpdate, userDataPasswordUpdate, userDataUserDelete };
}
