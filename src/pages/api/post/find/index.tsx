import { NextApiRequest, NextApiResponse } from "next";
import { postsFindBackEnd } from "utils/query/posts/find";
import { ContentEnum } from "types/database/types.database.contentEnum";

export default async function countUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { typ, page, published } = req.query;

  if (!(typeof typ === "string") || (typ != ContentEnum.post && typ != ContentEnum.article && typ != ContentEnum.video))
    return res.status(200).json({
      status: 400,
      name: "Wrong field type",
      message: "Wrong field type you can fix type , type must exist in ContentEnum",
      details: {},
    });
  else if (!parseInt(typeof page === "string" ? page : "0"))
    return res.status(400).json({
      status: 400,
      name: "Wrong field page",
      message: "Wrong field page you can fix numbe page page , page must as number miniumum 1",
      details: {},
    });
  else if (!(typeof published === "string") || (published != "true" && published != "false"))
    return res.status(400).json({
      status: 400,
      name: "Wrong field published",
      message: "Wrong field published you can fix published , published must as true or false",
      details: {},
    });
  else return res.status(200).json(await postsFindBackEnd({ typ: typ === "video" ? ContentEnum[typ] : typ === "article" ? ContentEnum[typ] : ContentEnum.post, published: published === "true" ? true : false, page: parseInt(typeof page === "string" ? page : "0") }));
}
