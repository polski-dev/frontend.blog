import { NextApiRequest, NextApiResponse } from "next";
import { postsCountBackEnd } from "utils/query/posts/count/index";

export default async function postsCountAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(await postsCountBackEnd());
}
