import axios, { AxiosResponse, AxiosError } from "axios";
import { UserCountType } from "../types/utils.request.user.count.types";

export async function userCountBackEnd({ id }: { id: number }): Promise<UserCountType> {
  let data: UserCountType = {};
  try {
    const dataEmailUpdate: AxiosResponse<UserCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/users/count/${id}`);
    data = dataEmailUpdate.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserCountType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }
  return data;
}

export async function userCountFrontEnd({ id }: { id: number }): Promise<UserCountType> {
  const count: AxiosResponse<UserCountType> = await axios.get(`/api/user/count/${id}`);
  return count.data;
}
