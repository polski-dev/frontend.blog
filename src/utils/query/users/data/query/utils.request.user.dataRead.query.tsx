import axios, { AxiosResponse } from "axios";

import { UserDataPublicReadType, UserEmailReadType } from "../types/utils.request.user.dataRead.types";

export async function userDataPublicReadBackEnd({ authToken }: { authToken: string }): Promise<UserDataPublicReadType> {
  const userDataPublicRead: AxiosResponse<UserDataPublicReadType> = await axios.get(process.env.BACKEND_API_URL + `/api/user/data/public`, { headers: { Authorization: authToken } });
  return userDataPublicRead.data;
}

export async function userDataPublicReadFrontEnd({ authToken }: { authToken: string }): Promise<UserDataPublicReadType> {
  const userDataPublicRead: AxiosResponse<UserDataPublicReadType> = await axios.get(`/api/user/data/public`, { headers: { Authorization: `Bearer ${authToken}` } });
  return userDataPublicRead.data;
}

export async function userEmailReadBackEnd({ authToken }: { authToken: string }): Promise<UserEmailReadType> {
  const userEmailRead: AxiosResponse<UserEmailReadType> = await axios.get(process.env.BACKEND_API_URL + `/api/user/data/email`, { headers: { Authorization: authToken } });
  return userEmailRead.data;
}

export async function userEmailReadFrontEnd({ authToken }: { authToken: string }): Promise<UserEmailReadType> {
  const userEmailRead: AxiosResponse<UserEmailReadType> = await axios.get(`/api/user/data/email`, { headers: { Authorization: `Bearer ${authToken}` } });
  return userEmailRead.data;
}
