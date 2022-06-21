import { NextApiRequest, NextApiResponse } from "next";
import { postsFindBackEnd } from "utils/query/posts/find";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function postFindApi(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { typ, page, published, id } = req.query;

    if (!(typeof typ === "string") || (typ != ContentEnum.post && typ != ContentEnum.article && typ != ContentEnum.video && typ != ContentEnum.userPost))
      return res.status(200).json(MessageErrorInAPI({ name: "Wrong field type", message: "Wrong field type you can fix type , type must exist in ContentEnum" }));
    else if (!parseInt(typeof page === "string" ? page : "0")) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field page", message: "Wrong field page you can fix number page page , page must as number miniumum 1" }));
    else if (typ === ContentEnum.userPost && !parseInt(typeof id === "string" ? id : "0")) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field id", message: "Wrong field id you can fix number id , id must as number miniumum 1" }));
    else if (!(typeof published === "string") || (published != "true" && published != "false")) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field published", message: "Wrong field published you can fix published , published must as true or false" }));
    else
      return res.status(200).json(
        await postsFindBackEnd({
          typ: typ === "video" ? ContentEnum[typ] : typ === "article" ? ContentEnum[typ] : typ === "userPost" ? ContentEnum[typ] : ContentEnum.post,
          published: published === "true" ? true : false,
          page: parseInt(typeof page === "string" ? page : "0"),
          id: parseInt(typeof id === "string" ? id : "0"),
        })
      );
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
