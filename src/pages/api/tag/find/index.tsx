import { NextApiRequest, NextApiResponse } from "next";
import { tagsFindBackEnd } from "utils/query/tags/find";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function tagFindApi(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { published, page, search } = req.query;

    console.log(published, page, search);
    if (!parseInt(typeof page === "string" ? page : "0")) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field page", message: "Wrong field page you can fix number page page , page must as number miniumum 1" }));
    else if (!(typeof published === "string") || (published != "true" && published != "false")) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field published", message: "Wrong field published you can fix published , published must as true or false" }));
    else
      return res.status(200).json(
        await tagsFindBackEnd({
          published: published === "true" ? true : false,
          search: typeof search === "string" ? search : "",
          page: parseInt(typeof page === "string" ? page : "0"),
        })
      );
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
