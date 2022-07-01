import axios, { AxiosResponse, AxiosError } from "axios";
import { PostsTypEnum } from "types/database/types.database.post";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { PostCreateType } from "../types/utils.request.posts.view.types";

export async function postCreateFrontEnd({ typ, title, cover, content, tags, youtube, authToken }: { typ: PostsTypEnum; title: string; cover: File; content: string; tags: string; youtube?: string; authToken: string }): Promise<PostCreateType> {
  if (!typ || !title || !cover || !content || !tags) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const res: AxiosResponse<PostCreateType> = await axios.post(`http://localhost:1337/api/post`, { typ, title, cover, content, tags }, { headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "multipart/form-data" } });
    res.data;

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostCreateType>;
      if (serverError && serverError.response) data = serverError.response.data;
    } else data = { data: null };
  }

  return data;
}
