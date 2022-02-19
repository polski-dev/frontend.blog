import { dataFromAPI } from "function/function.index";

export default async function contentArticleWaitingroomAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const article = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "articleWaitingRoom").contentQueryAPI(parseInt(page));

  res.status(200).json(article);
}
