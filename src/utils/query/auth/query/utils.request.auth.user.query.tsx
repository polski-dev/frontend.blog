import axios, { AxiosResponse, AxiosError } from "axios";
import { AuthSingInUserType, AuthSingUpUserType } from "../types/utils.request.auth.user.types";

export async function authUserSingInBackEnd({ identifier, password }: { identifier: string; password: number }): Promise<AuthSingInUserType> {
  let data = {};
  try {
    const res: AxiosResponse<AuthSingInUserType> = await axios.post(process.env.BACKEND_API_URL + `/api/auth/local`, { identifier, password });

    data = { data: res.data };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<AuthSingInUserType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function authUserSingInFrontEnd({ identifier, password }: { identifier: string; password: number }): Promise<AuthSingInUserType> {
  let data = {};
  try {
    const res: AxiosResponse<AuthSingInUserType> = await axios.post(`/api/auth/local`, { identifier, password });

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<AuthSingInUserType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function authUserSingUpBackEnd({ username, email, password }: { username: string; email: string; password: number }): Promise<AuthSingUpUserType> {
  let data = {};
  try {
    const res: AxiosResponse<AuthSingUpUserType> = await axios.post(process.env.BACKEND_API_URL + `/api/auth/local/register`, { username, email, password });

    data = { data: res.data };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<AuthSingUpUserType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function authUserSingUpFrontEnd({ username, email, password }: { username: string; email: string; password: number }): Promise<AuthSingUpUserType> {
  let data = {};
  console.log(username, email, password);
  try {
    const res: AxiosResponse<AuthSingUpUserType> = await axios.post(`/api/auth/local/register`, { username, email, password });
    console.log(res);
    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<AuthSingUpUserType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
