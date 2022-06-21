import { ErrorType } from "types/database/types.database.error";

export const MessageErrorInAPI = ({ status = 400, name, message }: { status?: number; name: string; message: string }): { data: null; error: ErrorType } => {
  return {
    data: null,
    error: {
      status,
      name,
      message,
      details: {},
    },
  };
};
