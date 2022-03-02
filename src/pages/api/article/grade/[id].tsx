import { articeAddGradeGet, articeAddGradeInitialState } from "database/database.graphQL.index";

export default async function ArticleAddGradeAPI(req: any, res: any): Promise<void> {
  const { id } = req.query;
  const { grade = null } = req.body;

  // i check page number
  if (parseInt(id) < 0) res.status(200).json(articeAddGradeInitialState);
  else if (parseInt(id) === 0 ? false : !parseInt(id)) res.status(400).json({ err: "wrong page number" });

  res.status(200).json(await articeAddGradeGet(parseInt(id), req.headers.authorization, grade));
}
