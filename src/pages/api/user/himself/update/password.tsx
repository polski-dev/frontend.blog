import { userHimselfDataEditPasswordGetPreview, userHimselfDataEditPasswordInitialState } from "utils/database/database.graphQL.index";

export default async function userHimselfData(req: any, res: any): Promise<void> {
  const { password } = req.body;
  if (!req.headers.authorization) res.status(200).json(userHimselfDataEditPasswordInitialState);
  else if (!password) res.status(200).json(userHimselfDataEditPasswordInitialState);

  res.status(200).json(await userHimselfDataEditPasswordGetPreview(req.headers.authorization, password));
}
