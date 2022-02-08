import { orderBy } from "lodash";
import { dataFromAPI } from "function/function.index";

export default async function contantVideoWaitingroomAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const video = await new dataFromAPI(process.env.URL_API, "videoWaitingRoom", parseInt(page)).contentQueryAPI;

  res.status(200).json(video);
}
