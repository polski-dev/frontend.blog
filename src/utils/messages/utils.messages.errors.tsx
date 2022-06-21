export const MessageErrorInAPI = ({ status = 400, name, message }: { status?: number; name: string; message: string }) => {
  return {
    data: null,
    error: {
      status: 404,
      name: "NotFound",
      message: "NotFound",
      details: {},
    },
  };
};
