import { articeWithOnlyTitleGetPreview, articeWithOnlyTitleInitialState } from "database/database.graphQL.index";

export default async function articeWithOnlyTitle(req: any, res: any): Promise<void> {
  const { page } = req.query;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(articeWithOnlyTitleInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(400).json({ err: "wrong id" });

  res.status(200).json(await articeWithOnlyTitleGetPreview(parseInt(page)));
}
