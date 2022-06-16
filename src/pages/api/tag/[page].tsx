import { tagWithOnlyTitleAllGetPreviewList, tagWithOnlyTitleInitialState } from "utils/database/database.graphQL.index";

export default async function TagWithOnlyTitleAllAPI(req: any, res: any): Promise<void> {
  const { page } = req.query;
  // i check page number
  if (parseInt(page) < 0) res.status(200).json(tagWithOnlyTitleInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(400).json({ err: "wrong page number" });

  res.status(200).json(await tagWithOnlyTitleAllGetPreviewList(parseInt(page)));
}
