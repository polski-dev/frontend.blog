import { articeAddViewGet, articeAddViewInitialState } from "database/database.graphQL.index";

export default async function articeAddViewTitle(req: any, res: any): Promise<void> {
  const { id } = req.query;

  // i check page number
  if (parseInt(id) < 0) res.status(200).json(articeAddViewInitialState);
  else if (parseInt(id) === 0 ? false : !parseInt(id)) res.status(400).json({ err: "wrong id" });

  res.status(200).json(await articeAddViewGet(parseInt(id)));
}
