import axios, { AxiosResponse } from "axios";
import { SearchType } from "../types/utils.request.tags.search.types";

export async function searchBackEnd({ query, page = 1 }: { query?: string; page?: number }): Promise<SearchType> {
  const res: AxiosResponse<SearchType> = await axios.get(process.env.BACKEND_API_URL + `/api/searchs/${query}/${page}`);
  return res.data;
}

export async function searchFrontEnd({ query, page = 1 }: { query?: string; page?: number }): Promise<SearchType> {
  const res: AxiosResponse<SearchType> = await axios.get(`/api/search/${query}/${page}`);
  return res.data;
}
