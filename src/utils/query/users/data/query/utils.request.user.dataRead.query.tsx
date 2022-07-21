import axios, { AxiosResponse, AxiosError } from "axios";

import { UserDataPublicReadType, UserEmailReadType } from "../types/utils.request.user.dataRead.types";

export async function userDataPublicReadBackEnd({ authToken }: { authToken: string }): Promise<UserDataPublicReadType> {
  let data = {};
  try {
    const res: AxiosResponse<UserDataPublicReadType> = await axios.get(process.env.BACKEND_API_URL + `/api/user/data/public`, { headers: { Authorization: authToken } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserDataPublicReadType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userDataPublicReadFrontEnd({ authToken }: { authToken: string }): Promise<UserDataPublicReadType> {
  let data = {};
  try {
    const res: AxiosResponse<UserDataPublicReadType> = await axios.get(`/api/user/data/public`, { headers: { Authorization: `Bearer ${authToken}` } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserDataPublicReadType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userEmailReadBackEnd({ authToken }: { authToken: string }): Promise<UserEmailReadType> {
  let data = {};
  try {
    const res: AxiosResponse<UserEmailReadType> = await axios.get(process.env.BACKEND_API_URL + `/api/user/data/email`, { headers: { Authorization: authToken } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserEmailReadType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userEmailReadFrontEnd({ authToken }: { authToken: string }): Promise<UserEmailReadType> {
  let data = {};
  try {
    const res: AxiosResponse<UserEmailReadType> = await axios.get(`/api/user/data/email`, { headers: { Authorization: `Bearer ${authToken}` } });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserEmailReadType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
