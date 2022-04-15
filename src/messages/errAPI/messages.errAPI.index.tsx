import { messagesErrAPIType, messagesParamsErrAPIType } from "./messages.errAPI.type";

export const CreateMessageErr: ({ status, name, message, path }: messagesParamsErrAPIType) => messagesErrAPIType = ({ status, name, message, path }: messagesParamsErrAPIType): messagesErrAPIType => {
  return {
    error: {
      status,
      name,
      message,
      details: {
        errors: [
          {
            path,
            message,
            name,
          },
        ],
      },
    },
  };
};
