import { NextApiRequest, NextApiResponse } from "next";
import { postCountBackEnd } from "utils/query/posts/count/index";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function postCountAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { id } = req.query;
  const turstId: number = typeof id === "string" ? parseInt(id) : 0;
  if (!!id?.length && !turstId) res.status(400).json(MessageErrorInAPI({ name: "Wrong post id", message: "Wrong post id you can fix id , id must as number miniumum 1" }));

  res.status(200).json(await postCountBackEnd({ id: turstId }));
}
