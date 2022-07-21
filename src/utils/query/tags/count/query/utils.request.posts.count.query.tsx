import axios, { AxiosResponse, AxiosError } from "axios";
import { TagsCountType, TagCountType } from "./../types/utils.request.posts.count.types";

export async function tagCountBackEnd({ id }: { id: number }): Promise<TagCountType> {
  let data = {};
  try {
    const res: AxiosResponse<TagCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/tag/count/${id}`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function tagCountFrontEnd({ id }: { id: number }): Promise<TagCountType> {
  let data = {};
  try {
    const res: AxiosResponse<TagCountType> = await axios.get(`/api/tag/count/${id}`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function tagsCountBackEnd(): Promise<TagsCountType> {
  let data = {};
  try {
    const res: AxiosResponse<TagsCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/tag/count`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagsCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function tagsCountFrontEnd(): Promise<TagsCountType> {
  let data = {};
  try {
    const res: AxiosResponse<TagsCountType> = await axios.get(`/api/tag/count`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagsCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
