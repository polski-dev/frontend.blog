import axios, { AxiosResponse, AxiosError } from "axios";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { ViewAddInTagType } from "../types/utils.request.tags.view.types";

export async function viewAddInTagBackEnd({ tagId }: { tagId?: number }): Promise<ViewAddInTagType> {
  if (!tagId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const res: AxiosResponse<ViewAddInTagType> = await axios.put(process.env.BACKEND_API_URL + `/api/tag/views/${tagId}`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<ViewAddInTagType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}

export async function viewAddInTagFrontEnd({ tagId }: { tagId?: number }): Promise<ViewAddInTagType> {
  if (!tagId) return MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });

  let data = {};
  try {
    const res: AxiosResponse<ViewAddInTagType> = await axios.put(`/api/tag/view/${tagId}`);

    data = res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<ViewAddInTagType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
