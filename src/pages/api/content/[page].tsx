import { contentShortGetPreview, contentInitialState } from "database/database.graphQL.index";

export default async function contentAPI(req: any, res: any): Promise<void> {
  const { page } = req.query;
  const { waitingroom = false } = req.body;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(contentInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(500).json({ err: "wrong page number" });

  res.status(200).json(await contentShortGetPreview(parseInt(page), waitingroom));
}
