import axios, { AxiosResponse } from "axios";

import { UserDataPublicReadType } from "../types/utils.request.user.dataRead.types";

export async function userDataPublicReadBackEnd({ authToken }: { authToken: string }): Promise<UserDataPublicReadType> {
  const userDataPublicRead: AxiosResponse<UserDataPublicReadType> = await axios.get(process.env.BACKEND_API_URL + `/api/user/data/public`, { headers: { Authorization: authToken } });
  return userDataPublicRead.data;
}

export async function userDataPublicReadFrontEnd({ authToken }: { authToken: string }): Promise<UserDataPublicReadType> {
  const userDataPublicRead: AxiosResponse<UserDataPublicReadType> = await axios.get(`/api/user/data/public`, { headers: { Authorization: `Bearer ${authToken}` } });

  console.log(userDataPublicRead.data, "ok");
  return userDataPublicRead.data;
}
