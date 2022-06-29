import axios, { AxiosResponse, AxiosError } from "axios";
import { RatingEnum } from "types/database/types.database.rating";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { RaitingUserInPostFindType, RaitingAddInPostType } from "../types/utils.request.posts.rating.types";

export async function raitingUserInPostFindFoundBackEnd({ postId, userId }: { postId?: number; userId?: number }): Promise<RaitingUserInPostFindType> {
  if (!postId || !userId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const postsFind: AxiosResponse<RaitingUserInPostFindType> = await axios.get(process.env.BACKEND_API_URL + `/api/rating?filters[post][id][$eq]=${postId}&filters[author][id][$eq]=${userId}`);

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<RaitingUserInPostFindType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function raitingUserInPostFindFoundFrontEnd({ postId, userId }: { postId?: number; userId?: number }): Promise<RaitingUserInPostFindType> {
  if (!postId || !userId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const postsFind: AxiosResponse<RaitingUserInPostFindType> = await axios.get(`/api/post/rating?postId=${postId}&userId=${userId}`);

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<RaitingUserInPostFindType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function raitingAddInPostBackEnd({ postId, authToken, voice }: { postId?: number; authToken?: string; voice: RatingEnum }): Promise<RaitingAddInPostType> {
  if (!postId || !authToken || !voice) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields postId, authToken, voice" });

  let data = {};
  try {
    const postsFind: AxiosResponse<RaitingAddInPostType> = await axios.put(process.env.BACKEND_API_URL + `/api/rating`, { postId, voice }, { headers: { Authorization: authToken } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<RaitingAddInPostType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function raitingAddInPostFrontEnd({ postId, authToken, voice }: { postId?: number; authToken?: string; voice: RatingEnum }): Promise<RaitingAddInPostType> {
  if (!postId || !authToken || !voice) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields postId, authToken, voice" });

  let data = {};
  try {
    const postsFind: AxiosResponse<RaitingAddInPostType> = await axios.put(`/api/post/rating`, { postId, voice }, { headers: { Authorization: `Bearer ${authToken}` } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<RaitingAddInPostType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function raitingUserDeleteInPostBackEnd({ postId, authToken }: { postId?: number; authToken?: string }): Promise<any> {
  if (!postId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields postId, authToken, voice" });

  let data = {};
  try {
    const postsFind: AxiosResponse<RaitingAddInPostType> = await axios.delete(process.env.BACKEND_API_URL + `/api/rating/delete`, { headers: { Authorization: authToken, postId } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<RaitingAddInPostType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function raitingUserDeleteInPostFrontEnd({ postId, authToken }: { postId?: number; authToken?: string }): Promise<any> {
  if (!postId || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong someone fields postId, authToken, voice" });

  let data = {};
  try {
    const postsFind: AxiosResponse<RaitingAddInPostType> = await axios.delete(`/api/post/rating`, { headers: { Authorization: `Bearer ${authToken}`, postId } });

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<RaitingAddInPostType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
