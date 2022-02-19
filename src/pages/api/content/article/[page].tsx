import { dataFromAPI } from "function/function.index";

export default async function contentArticleAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });
  res.status(200).json(await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "article").contentQueryAPI(parseInt(page)));
}
