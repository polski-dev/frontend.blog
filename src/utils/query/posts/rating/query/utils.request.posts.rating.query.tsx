import axios, { AxiosResponse } from "axios";
import { RaitingUserInPostFindType, RaitingAddInPostType } from "../types/utils.request.posts.rating.types";
import { RatingEnum } from "types/database/types.database.rating";

export async function raitingUserInPostFindFoundBackEnd({ postId, userId }: { postId?: number; userId?: number }): Promise<RaitingUserInPostFindType> {
  if (!postId || !userId)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res: AxiosResponse<RaitingUserInPostFindType> = await axios.get(process.env.BACKEND_API_URL + `/api/rating?filters[post][id][$eq]=${postId}&filters[author][id][$eq]=${userId}`);

  return res.data;
}

export async function raitingUserInPostFindFoundFrontEnd({ postId, userId }: { postId?: number; userId?: number }): Promise<RaitingUserInPostFindType> {
  if (!postId || !userId)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res: AxiosResponse<RaitingUserInPostFindType> = await axios.get(`/api/post/rating?postId=${postId}&userId=${userId}`);

  return res.data;
}

export async function raitingAddInPostBackEnd({ postId, authToken, voice }: { postId?: number; authToken?: string; voice: RatingEnum }): Promise<RaitingAddInPostType> {
  if (!postId || !authToken || !voice)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong someone fields postId, authToken, voice",
        details: {},
      },
    };

  const res: AxiosResponse<RaitingAddInPostType> = await axios.put(process.env.BACKEND_API_URL + `/api/rating`, { postId, voice }, { headers: { Authorization: authToken } });

  return res.data;
}

export async function raitingAddInPostFrontEnd({ postId, authToken, voice }: { postId?: number; authToken?: string; voice: RatingEnum }): Promise<RaitingAddInPostType> {
  if (!postId || !authToken || !voice)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong someone fields postId, authToken, voice",
        details: {},
      },
    };

  const res: AxiosResponse<RaitingAddInPostType> = await axios.put(`/api/post/rating`, { postId, voice }, { headers: { Authorization: `Bearer ${authToken}` } });

  return res.data;
}

export async function raitingUserDeleteInPostBackEnd({ postId, authToken }: { postId?: number; authToken?: string }): Promise<any> {
  if (!postId || !authToken)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong someone fields postId, authToken, voice",
        details: {},
      },
    };

  const res: AxiosResponse<RaitingAddInPostType> = await axios.delete(process.env.BACKEND_API_URL + `/api/rating/delete`, { headers: { Authorization: authToken, postId } });

  return res.data;
}

export async function raitingUserDeleteInPostFrontEnd({ postId, authToken }: { postId?: number; authToken?: string }): Promise<any> {
  if (!postId || !authToken)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong someone fields postId, authToken, voice",
        details: {},
      },
    };

  const res: AxiosResponse<RaitingAddInPostType> = await axios.delete(`/api/post/rating`, { headers: { Authorization: `Bearer ${authToken}`, postId } });

  return res.data;
}
