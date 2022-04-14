export const CreateMessageErr: ({ status, name, message, path }: { status: number; name: string; path: string[]; message: string }) => {
  error: {
    status: number;
    name: string;
    message: string;
    details: {
      errors: [
        {
          path: string[];
          message: string;
          name: string;
        }
      ];
    };
  };
} = ({
  status,
  name,
  message,
  path,
}: {
  status: number;
  name: string;
  path: string[];
  message: string;
}): {
  error: {
    status: number;
    name: string;
    message: string;
    details: {
      errors: [
        {
          path: string[];
          message: string;
          name: string;
        }
      ];
    };
  };
} => {
  return {
    error: {
      status,
      name,
      message,
      details: {
        errors: [
          {
            path: [],
            message,
            name,
          },
        ],
      },
    },
  };
};
