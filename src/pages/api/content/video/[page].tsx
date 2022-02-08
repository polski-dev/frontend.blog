import { orderBy } from "lodash";
import dataFromAPI from "function/function.dataFormAPI";

export default async function handler(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const video = await new dataFromAPI("video", parseInt(page)).contentQuery;

  res.status(200).json(video);
}
