import { orderBy } from "lodash";
import { dataFromAPI } from "function/function.index";

export default async function contentArticleWaitingroomAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const article = await new dataFromAPI(process.env.URL_API, "articleWaitingRoom", parseInt(page)).contentQueryAPI;

  res.status(200).json(article);
}
