import { NextApiRequest, NextApiResponse } from "next";
import { userAddviewsInPageUserBackEnd } from "utils/query/user/view";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function viewInPost(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "PUT") {
    const { id } = req.query;
    const turstUserId: number = typeof id === "string" ? parseInt(id) : 0;

    if (!turstUserId) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" }));

    return res.status(200).json(await userAddviewsInPageUserBackEnd({ userId: turstUserId }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
