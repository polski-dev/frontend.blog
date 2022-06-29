import { NextApiRequest, NextApiResponse } from "next";
import { authUserSingInBackEnd } from "utils/query/auth/index";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function singInUserAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "POST") {
    const { identifier, password } = req.body;
    res.status(200).json(await authUserSingInBackEnd({ identifier, password }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
