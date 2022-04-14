import fs from "fs";
import formidable from "formidable";
const FormData = require("form-data");
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const errCreateMsg: ({ status, name, message, path }: { status: number; name: string; path: string[]; message: string }) => {
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

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const IncomingDataFromForm = new formidable.IncomingForm();

  IncomingDataFromForm.parse(req, async function (err: any, fields, files) {
    if (err) return res.status(400).json({ err: true });

    const file: any = typeof files?.avatar === "object" ? files.avatar : null;

    !!file && (await saveFile(file));
    res.status(200).json({ ok: "ok" });
  });
};

const saveFile = async (file: { filepath: string; originalFilename: string }) => {
  fs.readFile(`${__dirname}/${file.originalFilename}`, (err) => {
    console.log(err);
  });
  const data: Buffer = fs.readFileSync(file.filepath);

  fs.writeFile(`${__dirname}/${file.originalFilename}`, data, function (err) {
    if (err) throw err;
  });

  const form: any = new FormData();
  form.append("avatar", fs.createReadStream(`${__dirname}/${file.originalFilename}`));

  fetch("http://localhost:1337/api/user/himself/data/changeavatar", {
    method: "POST",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY0OTI2OTYxNywiZXhwIjoxNjUxODYxNjE3fQ.wf8qFWd5_KgAtskc8AOQ5Fa3xkvjeSaAVyORYJRDmpU",
    },
    body: form,
  })
    .then((response) =>
      response.json().then((d) => {
        fs.unlink(`${__dirname}/${file.originalFilename}`, (err) => {
          console.log(err);
        });
        return console.log(d);
      })
    )
    .catch((err) => {
      console.error(err);
    });

  return;
};

export default async function userHimselfAvatarChange(req: NextApiRequest, res: NextApiResponse) {
  req.method === "POST"
    ? post(req, res)
    : res.status(404).json({
        error: {
          status: 404,
          name: "Not Found",
          message: `Not Found`,
          details: {
            errors: [
              {
                path: [],
                message: `Not Found`,
                name: "Not Found",
              },
            ],
          },
        },
      });
}
