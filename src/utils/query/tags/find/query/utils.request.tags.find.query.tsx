import axios, { AxiosResponse, AxiosError } from "axios";
import { TagsFindType, TagFindOneType } from "./../types/utils.request.tags.find.types";

export async function tagsFindBackEnd({ published, page = 1, search }: { published?: boolean; page?: number; search?: string }): Promise<TagsFindType> {
  let data = {};
  try {
    const res: AxiosResponse<TagsFindType> = await axios.get(
      process.env.BACKEND_API_URL + `/api/tag?pagination[page]=${page}&sort=views%3Adesc${typeof published === "boolean" ? `&filters[publishedAt][$null]=${!published}` : ""}${typeof search === "string" ? `&filters[title][$containsi]=${search}&populate=cover` : ""}`
    );

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagsFindType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function tagFindOneBackEnd({ id }: { id: number }): Promise<TagFindOneType> {
  let data = {};
  try {
    const res: AxiosResponse<TagFindOneType> = await axios.get(process.env.BACKEND_API_URL + `/api/tag/${id}?populate=cover`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<TagFindOneType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
