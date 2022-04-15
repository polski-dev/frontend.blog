type status = number;
type name = string;
type path = string[];
type message = string;

export type messagesParamsErrAPIType = {
  status: status;
  name: name;
  path: path;
  message: message;
};

export interface messagesErrAPIType {
  error: {
    status: status;
    name: name;
    message: message;
    details: {
      errors: [
        {
          path: path;
          message: message;
          name: name;
        }
      ];
    };
  };
}
