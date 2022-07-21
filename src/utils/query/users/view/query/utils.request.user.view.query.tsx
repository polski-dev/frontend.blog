import axios, { AxiosResponse, AxiosError } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { UserAddviewsInPageUserType } from "../types/utils.request.user.view.types";

export async function userAddviewsInPageUserBackEnd({ userId }: { userId?: number }): Promise<UserAddviewsInPageUserType> {
  if (!userId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const res: AxiosResponse<UserAddviewsInPageUserType> = await axios.put(process.env.BACKEND_API_URL + `/api/users/views/${userId}`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserAddviewsInPageUserType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function userAddviewsInPageUserFrontEnd({ userId }: { userId?: number }): Promise<UserAddviewsInPageUserType> {
  if (!userId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const res: AxiosResponse<UserAddviewsInPageUserType> = await axios.put(`/api/user/view/${userId}`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<UserAddviewsInPageUserType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
