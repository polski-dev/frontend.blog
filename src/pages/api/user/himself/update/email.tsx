import { userHimselfDataEditEmailGetPreview, userHimselfDataEditEmailInitialState } from "utils/database/database.graphQL.index";

export default async function userHimselfData(req: any, res: any): Promise<void> {
  const { email } = req.body;
  if (!req.headers.authorization) res.status(200).json(userHimselfDataEditEmailInitialState);
  else if (!email) res.status(200).json(userHimselfDataEditEmailInitialState);

  res.status(200).json(await userHimselfDataEditEmailGetPreview(req.headers.authorization, email));
}
