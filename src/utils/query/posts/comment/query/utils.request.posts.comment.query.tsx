import axios from "axios";

export async function postCommentAddBackEnd({ postId, comment, authToken }: { postId?: number; comment?: string; authToken?: string }) {
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
    process.env.BACKEND_API_URL + `/api/comments/api::posts.posts:${postId}`,
    {
      content: comment,
    },
    { headers: { Authorization: authToken } }
  );
  return !!res?.data?.error ? { data: res.data } : { data: res.data };
}

export async function postCommentAddFrontEnd({ postId, comment, authToken }: { postId?: number; comment?: string; authToken?: string }) {
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
  return !!res?.data?.error ? { data: res.data } : { data: res.data };
}
