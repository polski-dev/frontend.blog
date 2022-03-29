import { contentShortWithTagGetPreview, contentShortWithTagInitialState } from "database/database.graphQL.index";

export default async function contentWithTagAPI(req: any, res: any): Promise<void> {
  const [page, tagId] = req.query.query;

  // i check page number
  if (parseInt(page) < 0 || parseInt(tagId) < 0) res.status(200).json(contentShortWithTagInitialState);

  res.status(200).json(await contentShortWithTagGetPreview(parseInt(page), tagId));
}
