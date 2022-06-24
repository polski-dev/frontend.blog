import { NextApiRequest, NextApiResponse } from "next";
import { tagCountBackEnd } from "utils/query/tags/count/index";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function tagsCountAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { id } = req.query;
  const turstId: number = typeof id === "string" ? parseInt(id) : 0;
  if (!turstId) res.status(400).json(MessageErrorInAPI({ name: "Wrong tag id", message: "Wrong tag id you can fix id , id must as number miniumum 1" }));

  res.status(200).json(await tagCountBackEnd({ id: turstId }));
}
