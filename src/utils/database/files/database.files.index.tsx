import restAPISendFile from "../fetchAPI/database.fetchAPI.restAPISendFile";

// import type
import { UploadType } from "./type/database.upload.type";

// function
export const uploadFile: ({ file, authorization }: { file: File; authorization: string }) => Promise<UploadType> = async ({ file, authorization }: { file: File; authorization: string }): Promise<UploadType> => {
  const res = await restAPISendFile({ name: "files", path: `https://polskidev.herokuapp.com/api/upload`, file, authorization: `Bearer ${authorization}` });
  if (!res?.error) return { data: res };
  else return res;
};

export type { UploadType };
