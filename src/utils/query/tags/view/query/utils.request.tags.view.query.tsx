import axios, { AxiosResponse } from "axios";
import { ViewAddInTagType } from "../types/utils.request.tags.view.types";

export async function viewAddInTagBackEnd({ tagId }: { tagId?: number }): Promise<ViewAddInTagType> {
  if (!tagId)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res: AxiosResponse<ViewAddInTagType> = await axios.put(process.env.BACKEND_API_URL + `/api/tag/views/${tagId}`);
  return res.data;
}

export async function viewAddInTagFrontEnd({ tagId }: { tagId?: number }): Promise<ViewAddInTagType> {
  if (!tagId)
    return {
      data: null,
      error: {
        status: 400,
        name: "Wrong field",
        message: "Wrong one from fields",
        details: {},
      },
    };

  const res: AxiosResponse<ViewAddInTagType> = await axios.put(`/api/tag/view/${tagId}`);

  return res.data;
}
