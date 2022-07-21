import axios, { AxiosResponse, AxiosError } from "axios";

import { PostsCountType, PostCountType } from "./../types/utils.request.posts.count.types";

export async function postsCountBackEnd(): Promise<PostsCountType> {
  let data = {};
  try {
    const postsCount: AxiosResponse<PostsCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/post/count`);
    data = postsCount.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostsCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function postsCountFrontEnd() {
  let data = {};
  try {
    const postsCount: AxiosResponse<PostsCountType> = await axios.get(`/api/post/count`);
    data = postsCount.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostsCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function postCountBackEnd({ id }: { id: number }): Promise<PostCountType> {
  let data = {};
  try {
    const postCount: AxiosResponse<PostCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/post/count/${id}`);
    data = postCount.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function postCountFrontEnd(id?: number) {
  let data = {};
  try {
    const postCount: AxiosResponse<PostCountType> = await axios.get(`/api/post/count/${id}`);
    data = postCount.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
