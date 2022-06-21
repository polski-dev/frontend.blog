import axios, { AxiosResponse } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { UserAddviewsInPageUserType } from "../types/utils.request.user.view.types";

export async function userAddviewsInPageUserBackEnd({ userId }: { userId?: number }): Promise<UserAddviewsInPageUserType> {
  if (!userId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  const res: AxiosResponse<UserAddviewsInPageUserType> = await axios.put(process.env.BACKEND_API_URL + `/api/users/views/${userId}`);

  return res.data;
}

export async function userAddviewsInPageUserFrontEnd({ userId }: { userId?: number }): Promise<UserAddviewsInPageUserType> {
  if (!userId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  const res: AxiosResponse<UserAddviewsInPageUserType> = await axios.put(`/api/user/view/${userId}`);

  return res.data;
}
