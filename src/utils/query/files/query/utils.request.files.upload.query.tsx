import axios, { AxiosResponse, AxiosError } from "axios";
import { FilesUploadType } from "../types/utils.request.files.upload.types";

export async function filesUploadFrontEnd({ file, authToken }: { file: File; authToken: string }): Promise<FilesUploadType> {
  let data: any = {};
  try {
    const res: AxiosResponse<any> = await axios.post(`https://polskidev.herokuapp.com/api/upload`, { files: file }, { headers: { Authorization: `Bearer ${authToken}`, "Content-Type": "multipart/form-data" } });

    if (res?.data?.length)
      data.data = res.data.map((item: any) => {
        return { id: item.id, attributes: { ...item } };
      });
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<FilesUploadType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
