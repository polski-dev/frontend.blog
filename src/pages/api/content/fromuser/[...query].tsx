import { contentShortFromUserGetPreview, contentShortFromUserInitialState } from "utils/database/database.graphQL.index";

export default async function contentFromUserAPI(req: any, res: any): Promise<void> {
  const [page, userId] = req.query.query;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(contentShortFromUserInitialState);

  res.status(200).json(await contentShortFromUserGetPreview(parseInt(page), userId));
}
