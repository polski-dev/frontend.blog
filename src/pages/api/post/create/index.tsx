import { NextApiRequest, NextApiResponse } from "next";
import { postCreateBackEnd, PostCreateType } from "utils/query/posts/create";

import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function postFindApi(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "POST") {
    const { authorization } = req.headers;
    const { typ, title, cover, content, tags, youtube, authToken } = req.query;

    if (!!(typ === "string") || !title || !cover || !content || !tags || authToken) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" }));

    res.status(200).json(await postCreateBackEnd({ typ, title, cover, content, tags, youtube, authToken }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
