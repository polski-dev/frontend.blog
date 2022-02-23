import { userByIdGetPreview, userByIdInitialState } from "database/database.graphQL.index";

export default async function ArticleShortAPI(req: any, res: any): Promise<void> {
  const { id } = req.query;

  // i check page number
  if (parseInt(id) < 0) res.status(200).json(userByIdInitialState);
  else if (parseInt(id) === 0 ? false : !parseInt(id)) res.status(400).json({ err: "wrong page number" });

  res.status(200).json(await userByIdGetPreview(parseInt(id)));
}
