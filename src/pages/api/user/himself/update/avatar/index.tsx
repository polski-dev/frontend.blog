import formidable from "formidable";
import FormData from "form-data";
import fs from "fs";

import type { NextApiRequest, NextApiResponse } from "next";
export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.avatar).then((d) => {
      console.log(d);
      res.status(200).json({ ok: "ok" });
    });
  });
};

const saveFile = async (file: any) => {
  // const data = fs.readFileSync(file.filepath);
  const form = new FormData();
  form.append("avatar", fs.createReadStream(file.filepath));
  form.append("name", "face.png");

  const uploadResponse = await fetch("http://localhost:1337/api/user/himself/data/changeavatar", {
    method: "POST",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY0OTI2OTYxNywiZXhwIjoxNjUxODYxNjE3fQ.wf8qFWd5_KgAtskc8AOQ5Fa3xkvjeSaAVyORYJRDmpU",
    },
    body: form,
  })
    .then((response) => response.json().then((d) => console.log(d)))
    .catch((err) => err);

  return;
};

export default async function userHimselfAvatarChange(req: NextApiRequest, res: NextApiResponse) {
  req.method === "POST" ? post(req, res) : res.status(404).json({ err: "l" });
}
