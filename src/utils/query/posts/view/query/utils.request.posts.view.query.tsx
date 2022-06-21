import axios, { AxiosResponse } from "axios";
import { ViewAddInPostType } from "../types/utils.request.posts.view.types";

export async function viewAddInPostBackEnd({ postId }: { postId?: number }): Promise<ViewAddInPostType> {
  if (!postId)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res: AxiosResponse<ViewAddInPostType> = await axios.put(process.env.BACKEND_API_URL + `/api/post/views/${postId}`);

  return res.data;
}

export async function viewAddInPostFrontEnd({ postId }: { postId?: number }): Promise<ViewAddInPostType> {
  if (!postId)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res: AxiosResponse<ViewAddInPostType> = await axios.put(`/api/post/view/${postId}`);

  return res.data;
}
