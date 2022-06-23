import { NextApiRequest, NextApiResponse } from "next";
import { userCountBackEnd } from "utils/query/users/count";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function userCountAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { id } = req.query;
  const turstId: number = typeof id === "string" ? parseInt(id) : 0;
  if (!turstId) res.status(400).json(MessageErrorInAPI({ name: "Wrong post id", message: "Wrong post id you can fix id , id must as number miniumum 1" }));

  res.status(200).json(await userCountBackEnd({ id: turstId }));
}
