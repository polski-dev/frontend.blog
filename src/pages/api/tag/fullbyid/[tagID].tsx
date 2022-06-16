import { tagFullByIdGetPreview, tagFullByIdInitialState } from "utils/database/database.graphQL.index";

export default async function TagWithOnlyTitleAllAPI(req: any, res: any): Promise<void> {
  const { tagID } = req.query;
  // i check page number
  if (parseInt(tagID) < 0) res.status(200).json(tagFullByIdInitialState);

  res.status(200).json(await tagFullByIdGetPreview(parseInt(tagID)));
}
