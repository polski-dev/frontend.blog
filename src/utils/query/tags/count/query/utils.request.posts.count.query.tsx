import axios, { AxiosResponse } from "axios";
import { TagsCountType, TagCountType } from "./../types/utils.request.posts.count.types";

export async function tagCountBackEnd({ id }: { id: number }): Promise<TagCountType> {
  const res: AxiosResponse<TagCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/tag/count/${id}`);
  return res.data;
}

export async function tagCountFrontEnd({ id }: { id: number }): Promise<TagCountType> {
  let res: AxiosResponse<TagCountType> = await axios.get(`/api/tag/count/${id}`);
  return res.data;
}

export async function tagsCountBackEnd(): Promise<TagsCountType> {
  const res: AxiosResponse<TagsCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/tag/count`);
  return res.data;
}

export async function tagsCountFrontEnd(): Promise<TagsCountType> {
  let res: AxiosResponse<TagsCountType> = await axios.get(`/api/tag/count`);
  return res.data;
}
