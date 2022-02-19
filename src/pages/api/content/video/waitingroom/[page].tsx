import { dataFromAPI } from "function/function.index";

export default async function contantVideoWaitingroomAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const video = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "videoWaitingRoom").contentQueryAPI(parseInt(page));

  res.status(200).json(video);
}
