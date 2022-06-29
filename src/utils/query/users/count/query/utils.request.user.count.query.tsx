import axios, { AxiosResponse, AxiosError } from "axios";
import { UserCountType } from "../types/utils.request.user.count.types";

export async function usersCountBackEnd(): Promise<UserCountType> {
  let data: UserCountType = {};
  try {
    const res: AxiosResponse<UserCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/users/count`);
    data = res.data;
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

export async function usersCountFrontEnd(): Promise<UserCountType> {
  let data = {};
  try {
    const res: AxiosResponse<UserCountType> = await axios.get(`/api/user/count`);

    data = res.data;
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

export async function userCountBackEnd({ id }: { id: number }): Promise<UserCountType> {
  let data: UserCountType = {};
  try {
    const res: AxiosResponse<UserCountType> = await axios.get(process.env.BACKEND_API_URL + `/api/users/count/${id}`);
    data = res.data;
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
  let data = {};
  try {
    const res: AxiosResponse<UserCountType> = await axios.get(`/api/user/count/${id}`);

    data = res.data;
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
