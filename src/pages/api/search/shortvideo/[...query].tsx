import { searchShortVideoGetPreview, searchShortVideoInitialState, SearchShortVideoType } from "database/database.graphQL.index";

export default async function searchAPI(req: any, res: any) {
  const [page, query] = req.query.query;

  // i check data
  if (parseInt(page) < 0) res.status(200).json(searchShortVideoInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(500).json({ err: "wrong page number" });

  // query
  const result: SearchShortVideoType = await searchShortVideoGetPreview(parseInt(page), false, query);

  res.status(200).json(result);
}
