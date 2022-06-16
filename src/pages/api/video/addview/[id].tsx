import { videoAddViewGet, videoAddViewInitialState } from "utils/database/database.graphQL.index";

export default async function VideoAddViewTitle(req: any, res: any): Promise<void> {
  const { id } = req.query;

  // i check page number
  if (parseInt(id) < 0) res.status(200).json(videoAddViewInitialState);
  else if (parseInt(id) === 0 ? false : !parseInt(id)) res.status(400).json({ err: "wrong id" });

  res.status(200).json(await videoAddViewGet(parseInt(id)));
}
