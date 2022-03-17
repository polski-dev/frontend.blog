import { videoAddCommentsGet, videoAddCommentsInitialState } from "database/database.graphQL.index";

export default async function VideoShortAPI(req: any, res: any): Promise<void> {
  const { id } = req.query;
  const { description } = req.body;

  // i check page number
  if (parseInt(id) < 0) res.status(200).json(videoAddCommentsInitialState);
  else if (parseInt(id) === 0 ? false : !parseInt(id)) res.status(400).json({ err: "wrong page number" });

  res.status(200).json(await videoAddCommentsGet(description, parseInt(id), req.headers.authorization));
}
