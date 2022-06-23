import axios, { AxiosResponse } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { UserAmISubscribeType, UserChangeSubscribeType } from "../types/utils.request.user.subscribe.types";

export async function userAmISubscribeBackEnd({ userId, authToken }: { userId?: number; authToken: string }): Promise<UserAmISubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });
  const amISubscribeStatus: AxiosResponse<UserAmISubscribeType> = await axios.get(process.env.BACKEND_API_URL + `/api/subscribes/users/${userId}`, { headers: { Authorization: authToken } });
  return amISubscribeStatus.data;
}

export async function userAmISubscribeFrontEnd({ userId, authToken }: { userId?: number; authToken?: string }): Promise<UserAmISubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });
  const amISubscribeStatus: AxiosResponse<UserAmISubscribeType> = await axios.get(`/api/subscribe/user/${userId}`, { headers: { Authorization: `Bearer ${authToken}` } });
  return amISubscribeStatus.data;
}

export async function userChangeSubscribeBackEnd({ userId, authToken }: { userId?: number; authToken: string }): Promise<UserChangeSubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });
  const amISubscribeStatus: AxiosResponse<UserChangeSubscribeType> = await axios.put(process.env.BACKEND_API_URL + `/api/subscribes/users/${userId}`, {}, { headers: { Authorization: authToken } });
  return amISubscribeStatus.data;
}

export async function userChangeSubscribeFrontEnd({ userId, authToken }: { userId?: number; authToken?: string }): Promise<UserChangeSubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });
  const amISubscribeStatus: AxiosResponse<UserChangeSubscribeType> = await axios.put(`/api/subscribe/user/${userId}`, {}, { headers: { Authorization: `Bearer ${authToken}` } });
  return amISubscribeStatus.data;
}
