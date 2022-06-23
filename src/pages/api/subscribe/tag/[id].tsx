import { NextApiRequest, NextApiResponse } from "next";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { userAmISubscribeBackEnd, userChangeSubscribeBackEnd } from "utils/query/subscribe/users";

MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" });
export default async function UserSubscribeAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { id } = req.query;
    const { authorization } = req.headers;
    const trustUserId: number = typeof id === "string" ? parseInt(id) : 0;
    const trustAuthorization: string = typeof authorization === "string" ? authorization : "";

    if (!trustUserId || !trustAuthorization.length) res.status(400).json(MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" }));

    res.status(200).json(await userAmISubscribeBackEnd({ userId: trustUserId, authToken: trustAuthorization }));
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { authorization } = req.headers;
    const trustUserId: number = typeof id === "string" ? parseInt(id) : 0;
    const trustAuthorization: string = typeof authorization === "string" ? authorization : "";

    if (!trustUserId || !trustAuthorization.length) res.status(400).json(MessageErrorInAPI({ name: "Wrong field", message: "Wrong one from fields" }));

    res.status(200).json(await userChangeSubscribeBackEnd({ userId: trustUserId, authToken: trustAuthorization }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
