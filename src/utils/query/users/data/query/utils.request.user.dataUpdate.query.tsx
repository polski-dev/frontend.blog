import axios, { AxiosError, AxiosResponse } from "axios";
import { UserDataAvatarUpdateType, UserDataPublicUpdateType, UserDataEmailUpdateType, UserDataPasswordUpdateType, UserDataUserDeleteType } from "../types/utils.request.user.dataUpdate.types";

export async function userDataAvatarUpdateFrontEnd({ file, authToken }: { file: File; authToken: string }): Promise<UserDataAvatarUpdateType> {
  const count: AxiosResponse<UserDataAvatarUpdateType> = await axios.put(`http://localhost:1337/api/user/data/avatar`, { avatar: file }, { headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "multipart/form-data" } });
  return count.data;
}

export async function userDataPublicUpdateBackEnd({
  about,
  city,
  country,
  github,
  instagram,
  tiktok,
  username,
  website,
  youtube,
  authToken,
}: {
  about: string;
  city: string;
  country: string;
  github: string;
  instagram: string;
  tiktok: string;
  username: string;
  website: string;
  youtube: string;
  authToken: string;
}): Promise<UserDataPublicUpdateType> {
  const userDataPublicUpdate: AxiosResponse<UserDataPublicUpdateType> = await axios.put(process.env.BACKEND_API_URL + `/api/user/data/public`, { about, city, country, github, instagram, tiktok, username, website, youtube }, { headers: { Authorization: authToken } });
  return userDataPublicUpdate.data;
}

export async function userDataPublicUpdateFrontEnd({
  about,
  city,
  country,
  github,
  instagram,
  tiktok,
  username,
  website,
  youtube,
  authToken,
}: {
  about: string;
  city: string;
  country: string;
  github: string;
  instagram: string;
  tiktok: string;
  username: string;
  website: string;
  youtube: string;
  authToken: string;
}): Promise<UserDataPublicUpdateType> {
  const userDataPublicRead: AxiosResponse<UserDataPublicUpdateType> = await axios.put(`/api/user/data/public`, { about, city, country, github, instagram, tiktok, username, website, youtube }, { headers: { Authorization: `Bearer ${authToken}` } });
  return userDataPublicRead.data;
}

export async function userDataEmailUpdateBackEnd({ email, authToken }: { email: string; authToken: string }): Promise<UserDataEmailUpdateType> {
  let data: UserDataEmailUpdateType = {};
  try {
    const dataEmailUpdate: AxiosResponse<UserDataEmailUpdateType> = await axios.put(process.env.BACKEND_API_URL + `/api/user/data/email`, { email }, { headers: { Authorization: authToken } });
    data = dataEmailUpdate.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserDataEmailUpdateType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }
  return data;
}

export async function userDataEmailUpdateFrontEnd({ email, authToken }: { email: string; authToken: string }): Promise<UserDataEmailUpdateType> {
  const dataEmailUpdate: AxiosResponse<UserDataEmailUpdateType> = await axios.put(`/api/user/data/email`, { email }, { headers: { Authorization: `Bearer ${authToken}` } });
  return dataEmailUpdate.data;
}

export async function userDataPasswordUpdateBackEnd({ password, authToken }: { password: string; authToken: string }): Promise<UserDataPasswordUpdateType> {
  let data: UserDataPasswordUpdateType = {};
  try {
    const dataPasswordUpdate: AxiosResponse<UserDataPasswordUpdateType> = await axios.put(process.env.BACKEND_API_URL + `/api/user/data/password`, { password }, { headers: { Authorization: authToken } });
    data = dataPasswordUpdate.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserDataPasswordUpdateType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }
  return data;
}

export async function userDataPasswordUpdateFrontEnd({ password, authToken }: { password: string; authToken: string }): Promise<UserDataPasswordUpdateType> {
  const dataPasswordUpdate: AxiosResponse<UserDataPasswordUpdateType> = await axios.put(`/api/user/data/password`, { password }, { headers: { Authorization: `Bearer ${authToken}` } });
  return dataPasswordUpdate.data;
}

export async function userDataUserDeleteBackEnd({ authToken }: { authToken: string }): Promise<UserDataUserDeleteType> {
  let data: UserDataUserDeleteType = {};
  try {
    const userDataUserDelete: AxiosResponse<UserDataUserDeleteType> = await axios.delete(process.env.BACKEND_API_URL + `/api/user/data/delete`, { headers: { Authorization: authToken } });
    data = userDataUserDelete.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserDataUserDeleteType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }
  return data;
}

export async function userDataUserDeleteFrontEnd({ authToken }: { authToken: string }): Promise<UserDataUserDeleteType> {
  const userDataUserDelete: AxiosResponse<UserDataUserDeleteType> = await axios.delete(`/api/user/data/delete`, { headers: { Authorization: `Bearer ${authToken}` } });
  return userDataUserDelete.data;
}
