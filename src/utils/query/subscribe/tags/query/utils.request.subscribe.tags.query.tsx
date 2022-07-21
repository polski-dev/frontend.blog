import axios, { AxiosResponse, AxiosError } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { TagAmISubscribeType, TagChangeSubscribeType } from "../types/utils.request.subscribe.tags.types";

export async function tagAmISubscribeBackEnd({ tagId, authToken }: { tagId?: number; authToken: string }): Promise<TagAmISubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields tagId, authToken" });

  let data = {};
  try {
    const postsFind: AxiosResponse<TagAmISubscribeType> = await axios.get(process.env.BACKEND_API_URL + `/api/subscribes/tags/${tagId}`, { headers: { Authorization: authToken } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagAmISubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function tagAmISubscribeFrontEnd({ tagId, authToken }: { tagId?: number; authToken?: string }): Promise<TagAmISubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields tagId, authToken" });

  let data = {};
  try {
    const postsFind: AxiosResponse<TagAmISubscribeType> = await axios.get(`/api/subscribe/tag/${tagId}`, { headers: { Authorization: `Bearer ${authToken}` } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagAmISubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function tagChangeSubscribeBackEnd({ tagId, authToken }: { tagId?: number; authToken: string }): Promise<TagChangeSubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });

  let data = {};
  try {
    const postsFind: AxiosResponse<TagChangeSubscribeType> = await axios.put(process.env.BACKEND_API_URL + `/api/subscribes/tags/${tagId}`, {}, { headers: { Authorization: authToken } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagChangeSubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function tagChangeSubscribeFrontEnd({ tagId, authToken }: { tagId?: number; authToken?: string }): Promise<TagChangeSubscribeType> {
  if (!tagId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields tagId, authToken" });

  let data = {};
  try {
    const postsFind: AxiosResponse<TagChangeSubscribeType> = await axios.put(`/api/subscribe/tag/${tagId}`, {}, { headers: { Authorization: `Bearer ${authToken}` } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagChangeSubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
