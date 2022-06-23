import axios, { AxiosResponse } from "axios";
import { TagsFindType, TagFindOneType } from "./../types/utils.request.tags.find.types";

export async function tagsFindBackEnd({ published, page = 1, search }: { published?: boolean; page?: number; search?: string }): Promise<TagsFindType> {
  const res: AxiosResponse<TagsFindType> = await axios.get(
    process.env.BACKEND_API_URL + `/api/tag?pagination[page]=${page}&sort=views%3Adesc${typeof published === "boolean" ? `&filters[publishedAt][$null]=${!published}` : ""}${typeof search === "string" ? `&filters[title][$containsi]=${search}&populate=cover` : ""}`
  );
  return res.data;
}

export async function tagFindOneBackEnd({ id }: { id: number }): Promise<TagFindOneType> {
  const res: AxiosResponse<TagFindOneType> = await axios.get(process.env.BACKEND_API_URL + `/api/tag/${id}?populate=cover`);

  return res.data;
}
