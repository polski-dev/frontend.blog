import { NextApiRequest, NextApiResponse } from "next";
import { tagsCountBackEnd } from "utils/query/tags/count";

export default async function tagsCountAPI(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json(await tagsCountBackEnd());
}
