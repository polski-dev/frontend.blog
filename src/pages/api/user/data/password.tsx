import { NextApiRequest, NextApiResponse } from "next";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { userDataPasswordUpdateBackEnd } from "utils/query/users/data";

export default async function postRaitingInPostAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "PUT") {
    const { authorization } = req.headers;
    const { password } = req.body;

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(password)) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field email", message: "You must add good email" }));
    else if (!authorization) return res.status(400).json(MessageErrorInAPI({ name: "You don't have access", message: "You must log" }));
    else return res.status(200).json(await userDataPasswordUpdateBackEnd({ password, authToken: authorization }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
