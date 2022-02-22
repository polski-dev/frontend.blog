import { searchShortTagGetPreview, searchShortTagInitialState, SearchShortTagType } from "database/database.graphQL.index";

export default async function searchAPI(req: any, res: any): Promise<void> {
  const [page, query] = req.query.query;

  // i check data
  if (parseInt(page) < 0) res.status(200).json(searchShortTagInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(500).json({ err: "wrong page number" });

  // query
  const result: SearchShortTagType = await searchShortTagGetPreview(parseInt(page), query);

  res.status(200).json(result);
}
