import { NextApiRequest, NextApiResponse } from "next";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";
import { userDataPublicReadBackEnd, userDataPublicUpdateBackEnd } from "utils/query/users/data";

export default async function postRaitingInPostAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    const { authorization } = req.headers;

    if (!authorization) return res.status(400).json(MessageErrorInAPI({ name: "You don't have access", message: "You must log" }));
    else return res.status(200).json(await userDataPublicReadBackEnd({ authToken: authorization }));
  } else if (req.method === "PUT") {
    const { authorization } = req.headers;
    const { about, city, country, github, instagram, tiktok, username, website, youtube } = req.body;

    if (!authorization) return res.status(400).json(MessageErrorInAPI({ name: "You don't have access", message: "You must log" }));
    else return res.status(200).json(await userDataPublicUpdateBackEnd({ about, city, country, github, instagram, tiktok, username, website, youtube, authToken: authorization }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
