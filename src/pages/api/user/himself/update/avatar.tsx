import fs from "fs";
import { join } from "path";
import { Duplex } from "stream";
import FormData from "form-data";
import formidable from "formidable";
import IncomingForm from "formidable/Formidable";
import { CreateMessageErr } from "messages/errAPI/messages.errAPI.index";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

const deleteFile = (path: string): boolean => {
  let deleteStatus: boolean = false;
  fs.unlink(path, (status) => deleteStatus === !!status);
  return deleteStatus;
};

const checkIsFileExiste = (path: string): boolean => {
  let readFileStatus: boolean = false;
  fs.readFile(path, (status) => readFileStatus === !!status);
  return readFileStatus;
};

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const IncomingDataFromForm: IncomingForm = new formidable.IncomingForm();

  IncomingDataFromForm.parse(req, async function (err, fields, files: { avatar?: { filepath: string; originalFilename: string } }): Promise<void> {
    if (!!err) return res.status(400).json(CreateMessageErr({ status: 400, name: "App error", path: ["formidable: has problem"], message: "App error formidable" }));
    else if (!files?.avatar) return res.status(400).json(CreateMessageErr({ status: 400, name: "Field is empty", path: ["avatar: empty"], message: "Field with avatar is empty" }));
    const file: null | { filepath: string; originalFilename: string } = files?.avatar ? files.avatar : null;

    if (!!file) {
      if (checkIsFileExiste(`${__dirname}/${file.originalFilename}`)) deleteFile(`${__dirname}/${file.originalFilename}`);
      const dataFile: Buffer = fs.readFileSync(file.filepath);

      const bufferToStream = (buffer: Buffer) => {
        let stream = new Duplex();
        stream.push(buffer);
        stream.push(null);
        return stream;
      };

      fs.writeFile(`${__dirname}/${file.originalFilename}`, dataFile, function (err) {
        if (err) return res.status(400).json(CreateMessageErr({ status: 400, name: "App error", path: ["fs.writeFile: has problem"], message: "App error fs.writeFile" }));
        const formData: any = new FormData();
        console.log(bufferToStream(dataFile), "duplex");
        console.log(fs.createReadStream(`${__dirname}/${file.originalFilename}`), "createReadStream");
        formData.append("avatar", fs.createReadStream(`${__dirname}/${file.originalFilename}`));

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/himself/data/changeavatar`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${req.headers.authorization}` || "",
          },
          body: formData,
        })
          .then(
            (answer): Promise<void> =>
              answer.json().then((data) => {
                //    deleteFile(`${__dirname}/${file.originalFilename}`);
                return res.status(400).json(data);
              })
          )
          .catch((): void => {
            //deleteFile(`${__dirname}/${file.originalFilename}`);
            return res.status(400).json(CreateMessageErr({ status: 400, name: "App error", path: ["fetch: has problem"], message: "App error fetch" }));
          });
      });
    } else {
      return res.status(400).json(CreateMessageErr({ status: 400, name: "App error", path: ["App error"], message: "App error" }));
    }
  });
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
