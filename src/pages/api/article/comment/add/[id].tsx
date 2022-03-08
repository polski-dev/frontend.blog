import { articeAddCommentsGet, articeAddCommentsInitialState } from "database/database.graphQL.index";

export default async function ArticleShortAPI(req: any, res: any): Promise<void> {
  const { id } = req.query;
  const { description } = req.body;

  // i check page number
  if (parseInt(id) < 0) res.status(200).json(articeAddCommentsInitialState);
  else if (parseInt(id) === 0 ? false : !parseInt(id)) res.status(400).json({ err: "wrong page number" });

  res.status(200).json(await articeAddCommentsGet(description, parseInt(id), req.headers.authorization));
}
