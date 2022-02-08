require("dotenv").config();
import { orderBy } from "lodash";
import { dataFromAPI } from "function/function.index";

export default async function tagAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  res.status(200).json(await new dataFromAPI(process.env.URL_API, "all", parseInt(page)).tagQueryAPI);
}