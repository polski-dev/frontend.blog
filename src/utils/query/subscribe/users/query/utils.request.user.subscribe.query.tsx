import axios, { AxiosResponse, AxiosError } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { UserAmISubscribeType, UserChangeSubscribeType } from "../types/utils.request.user.subscribe.types";

export async function userAmISubscribeBackEnd({ userId, authToken }: { userId?: number; authToken: string }): Promise<UserAmISubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });

  let data = {};
  try {
    const res: AxiosResponse<UserAmISubscribeType> = await axios.get(process.env.BACKEND_API_URL + `/api/subscribes/users/${userId}`, { headers: { Authorization: authToken } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserAmISubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userAmISubscribeFrontEnd({ userId, authToken }: { userId?: number; authToken?: string }): Promise<UserAmISubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });

  let data = {};
  try {
    const res: AxiosResponse<UserAmISubscribeType> = await axios.get(`/api/subscribe/user/${userId}`, { headers: { Authorization: `Bearer ${authToken}` } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserAmISubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userChangeSubscribeBackEnd({ userId, authToken }: { userId?: number; authToken: string }): Promise<UserChangeSubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });

  let data = {};
  try {
    const res: AxiosResponse<UserChangeSubscribeType> = await axios.put(process.env.BACKEND_API_URL + `/api/subscribes/users/${userId}`, {}, { headers: { Authorization: authToken } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserChangeSubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userChangeSubscribeFrontEnd({ userId, authToken }: { userId?: number; authToken?: string }): Promise<UserChangeSubscribeType> {
  if (!userId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields userId, authToken" });

  let data = {};
  try {
    const res: AxiosResponse<UserChangeSubscribeType> = await axios.put(`/api/subscribe/user/${userId}`, {}, { headers: { Authorization: `Bearer ${authToken}` } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserChangeSubscribeType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
