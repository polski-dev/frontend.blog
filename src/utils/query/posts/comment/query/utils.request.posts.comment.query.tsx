import axios, { AxiosResponse } from "axios";
import { PostCommentAddType, PostCommentsListType } from "./../";

export async function postCommentAddBackEnd({ postId, comment, authToken }: { postId?: number; comment?: string; authToken?: string }): Promise<PostCommentAddType> {
  if (!postId || !comment || !authToken)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res: AxiosResponse<PostCommentAddType> = await axios.post(
    process.env.BACKEND_API_URL + `/api/comments/api::posts.posts:${postId}`,
    {
      content: comment,
    },
    { headers: { Authorization: authToken } }
  );

  return res.data;
}

export async function postCommentAddFrontEnd({ postId, comment, authToken }: { postId?: number; comment?: string; authToken?: string }): Promise<PostCommentAddType> {
  if (!postId || !comment || !authToken)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

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
  if (!postId || !page)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res = await axios.get(process.env.BACKEND_API_URL + `/api/comments/api::posts.posts:${postId}/flat?pagination[page]=${page}&sort=createdAt%3Adesc`);
  return res.data;
}

export async function postCommentsListFrontEnd({ postId = 0, page = 1 }: { postId?: number; page?: number }): Promise<PostCommentsListType> {
  if (!postId || !page)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res = await axios.get(`/api/post/comment`, {
    params: { postId, page },
  });
  return res.data;
}
