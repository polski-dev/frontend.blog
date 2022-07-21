import axios, { AxiosResponse, AxiosError } from "axios";
import { SearchType } from "../types/utils.request.tags.search.types";

export async function searchBackEnd({ query, page = 1 }: { query?: string; page?: number }): Promise<SearchType> {
  let data = {};
  try {
    const postsFind: AxiosResponse<SearchType> = await axios.get(process.env.BACKEND_API_URL + `/api/searchs/${query}/${page}`);

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<SearchType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function searchFrontEnd({ query, page = 1 }: { query?: string; page?: number }): Promise<SearchType> {
  let data = {};
  try {
    const postsFind: AxiosResponse<SearchType> = await axios.get(`/api/search/${query}/${page}`);

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<SearchType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
