import { searchShortArticleGetPreview, searchShortArticleInitialState, SearchShortArticleType } from "utils/database/database.graphQL.index";

export default async function searchAPI(req: any, res: any) {
  const [page, query] = req.query.query;

  // i check data
  if (parseInt(page) < 0) res.status(200).json(searchShortArticleInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(400).json({ err: "wrong page number" });

  // query
  const result: SearchShortArticleType = await searchShortArticleGetPreview(parseInt(page), false, query);

  res.status(200).json(result);
}
