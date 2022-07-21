import { ErrorType } from "types/database/types.database.error";
import { ImageFromDatabaseType } from "types/database/types.database.image";

export type FilesUploadType = {
  data?: ImageFromDatabaseType[] | null;
  error?: ErrorType;
};
