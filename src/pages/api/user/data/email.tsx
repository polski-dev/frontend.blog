import { NextApiRequest, NextApiResponse } from "next";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { userEmailReadBackEnd, userDataEmailUpdateBackEnd } from "utils/query/users/data";

export default async function postRaitingInPostAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json(MessageErrorInAPI({ name: "You don't have access", message: "You must log" }));
    else return res.status(200).json(await userEmailReadBackEnd({ authToken: authorization }));
  } else if (req.method === "PUT") {
    const { authorization } = req.headers;
    const { email } = req.body;

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) return res.status(400).json(MessageErrorInAPI({ name: "Wrong field email", message: "You must add good email" }));
    else if (!authorization) return res.status(400).json(MessageErrorInAPI({ name: "You don't have access", message: "You must log" }));
    else return res.status(200).json(await userDataEmailUpdateBackEnd({ email, authToken: authorization }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
