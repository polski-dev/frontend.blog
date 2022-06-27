import axios, { AxiosResponse } from "axios";

import { UserDataAvatarUpdateType, UserDataPublicUpdateType } from "../types/utils.request.user.dataUpdate.types";

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
