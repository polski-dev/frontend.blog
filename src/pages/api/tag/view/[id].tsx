import { NextApiRequest, NextApiResponse } from "next";
import { viewAddInTagBackEnd } from "utils/query/tags/view";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function viewInTag(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "PUT") {
    const { id } = req.query;
    const turstTagId: number = typeof id === "string" ? parseInt(id) : 0;

    if (!turstTagId) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" }));

    return res.status(200).json(await viewAddInTagBackEnd({ tagId: turstTagId }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
