import { orderBy } from "lodash";
import dataFromAPI from "function/function.dataFormAPI";

export default async function handler(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const article = await new dataFromAPI("articleWaitingRoom", parseInt(page)).contentQuery;

  res.status(200).json(article);
}
