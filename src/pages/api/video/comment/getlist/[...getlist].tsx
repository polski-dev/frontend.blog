import { videoGetListComments } from "utils/database/database.graphQL.index";

export default async function VideoGetListCommentsAPI(req: any, res: any): Promise<void> {
  const [idArticle, page] = req.query.getlist;

  // i check page number and id article
  if (parseInt(idArticle) <= 0 || parseInt(page) <= 0) res.status(200).json({ err: "wrong page number or article id" });

  res.status(200).json(await videoGetListComments(parseInt(idArticle), parseInt(page)));
}
