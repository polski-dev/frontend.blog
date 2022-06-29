import axios, { AxiosResponse, AxiosError } from "axios";

import { PostCommentAddType, PostCommentsListType } from "./../";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

export async function postCommentAddBackEnd({ postId, comment, authToken }: { postId?: number; comment?: string; authToken?: string }): Promise<PostCommentAddType> {
  if (!postId || !comment || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const postsFind: AxiosResponse<PostCommentAddType> = await axios.post(
      process.env.BACKEND_API_URL + `/api/comments/api::posts.posts:${postId}`,
      {
        content: comment,
      },
      { headers: { Authorization: authToken } }
    );

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostCommentAddType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function postCommentAddFrontEnd({ postId, comment, authToken }: { postId?: number; comment?: string; authToken?: string }): Promise<PostCommentAddType> {
  if (!postId || !comment || !authToken) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  const res = await axios.post(
    `/api/post/comment`,
    {
      postId,
      comment,
    },
    { headers: { Authorization: `Bearer ${authToken}` } }
  );

  return { data: res.data };
}

export async function postCommentsListBackEnd({ postId, page = 1 }: { postId?: number; page?: number }): Promise<PostCommentsListType> {
  if (!postId || !page) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const postsFind: AxiosResponse<PostCommentsListType> = await axios.get(process.env.BACKEND_API_URL + `/api/comments/api::posts.posts:${postId}/flat?pagination[page]=${page}&sort=createdAt%3Adesc`);

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostCommentsListType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function postCommentsListFrontEnd({ postId = 0, page = 1 }: { postId?: number; page?: number }): Promise<PostCommentsListType> {
  if (!postId || !page) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  const res = await axios.get(`/api/post/comment`, {
    params: { postId, page },
  });
  return res.data;
}
