import { NextApiRequest, NextApiResponse } from "next";
import { usersCountBackEnd } from "utils/query/users/count";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function userCountAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    res.status(200).json(await usersCountBackEnd());
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
