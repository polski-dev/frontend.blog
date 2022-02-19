require("dotenv").config();
import { dataFromAPI } from "function/function.index";

export default async function tagAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  res.status(200).json(await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "all").tagQueryAPI(parseInt(page)));
}
