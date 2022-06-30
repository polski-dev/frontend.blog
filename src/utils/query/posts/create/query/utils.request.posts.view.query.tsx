import axios, { AxiosResponse, AxiosError } from "axios";
import { ContentTypType } from "types/database/types.database.content";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { PostCreateType } from "../types/utils.request.posts.view.types";

export async function postCreateBackEnd({ typ, title, cover, content, tags, youtube, authToken }: { typ: ContentTypType; title: string; cover: File; content: string; tags: string; youtube?: string; authToken: string }): Promise<PostCreateType> {
  if (!typ || !title || !cover || !content || !tags) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const res: AxiosResponse<PostCreateType> = await axios.post(process.env.BACKEND_API_URL + `/api/post/`, { typ, title, cover, content, tags, youtube }, { headers: { Authorization: authToken, "Content-Type": "multipart/form-data" } });
    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostCreateType>;
      if (serverError && serverError.response) data = serverError.response.data;
    } else data = { data: null };
  }

  return data;
}

export async function postCreateFrontEnd({ typ, title, cover, content, tags, youtube, authToken }: { typ: ContentTypType; title: string; cover: File; content: string; tags: string; youtube?: string; authToken: string }): Promise<PostCreateType> {
  if (!typ || !title || !cover || !content || !tags) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const res: AxiosResponse<PostCreateType> = await axios.post(`/api/post/create`, { typ, title, cover, content, tags, youtube }, { headers: { Authorization: authToken, "Content-Type": "multipart/form-data" } });
    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostCreateType>;
      if (serverError && serverError.response) data = serverError.response.data;
    } else data = { data: null };
  }

  return data;
}
