import { NextApiRequest, NextApiResponse } from "next";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { userDataUserDeleteBackEnd } from "utils/query/users/data";

export default async function userDeleteAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "DELETE") {
    const { authorization } = req.headers;

    if (!authorization) return res.status(403).json(MessageErrorInAPI({ status: 403, name: "ForbiddenError", message: "Forbidden" }));
    else return res.status(200).json(await userDataUserDeleteBackEnd({ authToken: authorization }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
