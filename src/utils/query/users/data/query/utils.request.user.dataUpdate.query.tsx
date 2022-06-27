import axios, { AxiosResponse } from "axios";

import { UserCountType } from "../types/utils.request.user.dataRead.types";

export async function userCountBackEnd({ id }: { id: number }): Promise<UserCountType> {
  const count: AxiosResponse<UserCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/users/count/${id}`);

  return count.data;
}

export async function userCountFrontEnd({ id }: { id: number }): Promise<UserCountType> {
  const count: AxiosResponse<UserCountType> = await axios.get(`/api/user/count/${id}`);
  return count.data;
}
