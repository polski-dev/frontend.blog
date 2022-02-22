import { videoShortGetPreview, videoShortInitialState, VideoShortType } from "database/database.graphQL.index";

export default async function VideoShortAPI(req: any, res: any): Promise<void> {
  const { page } = req.query;
  const { waitingroom = false } = req.body;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(videoShortInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const video: VideoShortType = await videoShortGetPreview(parseInt(page), waitingroom);

  video?.video.data.forEach((art: any) => (art.type = "video"));

  res.status(200).json({
    ...video,
  });
}
