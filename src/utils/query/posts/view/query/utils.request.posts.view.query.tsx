import axios, { AxiosResponse, AxiosError } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { ViewAddInPostType } from "../types/utils.request.posts.view.types";

MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });
export async function viewAddInPostBackEnd({ postId }: { postId?: number }): Promise<ViewAddInPostType> {
  if (!postId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const postsFind: AxiosResponse<ViewAddInPostType> = await axios.put(process.env.BACKEND_API_URL + `/api/post/views/${postId}`);

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<ViewAddInPostType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function viewAddInPostFrontEnd({ postId }: { postId?: number }): Promise<ViewAddInPostType> {
  if (!postId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const postsFind: AxiosResponse<ViewAddInPostType> = await axios.put(`/api/post/view/${postId}`);

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<ViewAddInPostType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
