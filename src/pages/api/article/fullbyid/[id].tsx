import { articeFullByIdGetPreview, articleShortInitialState } from "utils/database/database.graphQL.index";

export default async function articeFullById(req: any, res: any): Promise<void> {
  const { id } = req.query;

  // i check page number
  if (parseInt(id) < 0) res.status(200).json(articleShortInitialState);
  else if (parseInt(id) === 0 ? false : !parseInt(id)) res.status(400).json({ err: "wrong id" });

  res.status(200).json(await articeFullByIdGetPreview(parseInt(id)));
}
