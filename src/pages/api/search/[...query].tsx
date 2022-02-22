import { searchShortContentGetPreview, searchShortContentInitialState, SearchShortContentType } from "database/database.graphQL.index";

export default async function searchAPI(req: any, res: any) {
  const [page, query] = req.query.query;

  // i check data
  if (parseInt(page) < 0) res.status(200).json(searchShortContentInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(500).json({ err: "wrong page number" });

  // query
  const result: SearchShortContentType = await searchShortContentGetPreview(parseInt(page), false, query);

  res.status(200).json(result);
}
