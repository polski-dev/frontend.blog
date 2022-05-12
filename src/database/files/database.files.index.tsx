import restAPISendFile from "./../fetchAPI/database.fetchAPI.restAPISendFile";

// import type
import { UploadType } from "./type/database.upload.type";

// function
const uploadFile: ({ file, authorization }: { file: File; authorization: string }) => Promise<UploadType> = async ({ file, authorization }: { file: File; authorization: string }): Promise<UploadType> =>
  await restAPISendFile({ name: "files", path: `https://polskidev.herokuapp.com/api/upload`, file, authorization: `Bearer ${authorization}` });
