import axios, { AxiosResponse } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { TagAmISubscribeType, TagChangeSubscribeType } from "../types/utils.request.subscribe.tags.types";

export async function tagAmISubscribeBackEnd({ tagId, authToken }: { tagId?: number; authToken: string }): Promise<TagAmISubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields tagId, authToken" });
  const res: AxiosResponse<TagAmISubscribeType> = await axios.get(process.env.BACKEND_API_URL + `/api/subscribes/tags/${tagId}`, { headers: { Authorization: authToken } });
  return res.data;
}

export async function tagAmISubscribeFrontEnd({ tagId, authToken }: { tagId?: number; authToken?: string }): Promise<TagAmISubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields tagId, authToken" });
  const res: AxiosResponse<TagAmISubscribeType> = await axios.get(`/api/subscribe/tag/${tagId}`, { headers: { Authorization: `Bearer ${authToken}` } });
  return res.data;
}

export async function tagChangeSubscribeBackEnd({ tagId, authToken }: { tagId?: number; authToken: string }): Promise<TagChangeSubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });
  const res: AxiosResponse<TagChangeSubscribeType> = await axios.put(process.env.BACKEND_API_URL + `/api/subscribes/tags/${tagId}`, {}, { headers: { Authorization: authToken } });
  return res.data;
}

export async function tagChangeSubscribeFrontEnd({ tagId, authToken }: { tagId?: number; authToken?: string }): Promise<TagChangeSubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields tagId, authToken" });
  const res: AxiosResponse<TagChangeSubscribeType> = await axios.put(`/api/subscribe/tag/${tagId}`, {}, { headers: { Authorization: `Bearer ${authToken}` } });
  return res.data;
}
