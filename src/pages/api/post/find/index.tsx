import { NextApiRequest, NextApiResponse } from "next";
import { postsFindBackEnd } from "utils/query/posts/find";

export default async function countUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(await postsFindBackEnd({}));
}
