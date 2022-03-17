import { videoWithOnlyTitleGetPreview, videoWithOnlyTitleInitialState } from "database/database.graphQL.index";

export default async function VideoWithOnlyTitle(req: any, res: any): Promise<void> {
  const { page } = req.query;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(videoWithOnlyTitleInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(400).json({ err: "wrong id" });

  res.status(200).json(await videoWithOnlyTitleGetPreview(parseInt(page)));
}
