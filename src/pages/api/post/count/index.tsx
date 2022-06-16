import { NextApiRequest, NextApiResponse } from "next";
import { postsCountBackEnd } from "utils/requests/posts/count/index";

export default async function countUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(await postsCountBackEnd());
}
