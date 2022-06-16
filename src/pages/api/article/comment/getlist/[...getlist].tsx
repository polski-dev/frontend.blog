import { articeGetListComments } from "utils/database/database.graphQL.index";

export default async function ArticeGetListCommentsAPI(req: any, res: any): Promise<void> {
  const [idArticle, page] = req.query.getlist;

  // i check page number and id article
  if (parseInt(idArticle) <= 0 || parseInt(page) <= 0) res.status(200).json({ err: "wrong page number or article id" });

  res.status(200).json(await articeGetListComments(parseInt(idArticle), parseInt(page)));
}
