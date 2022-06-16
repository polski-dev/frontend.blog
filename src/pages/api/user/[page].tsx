import { userGetListPreview, userGetListInitialState } from "utils/database/database.graphQL.index";

export default async function UserGetListShortAPI(req: any, res: any): Promise<void> {
  const { page } = req.query;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(userGetListInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(400).json({ err: "wrong page number" });

  res.status(200).json(await userGetListPreview(parseInt(page)));
}
