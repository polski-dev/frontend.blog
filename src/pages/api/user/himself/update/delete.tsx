import { userHimselfDeleteTypeGetPreview, userHimselfDeleteInitialState } from "utils/database/database.graphQL.index";

export default async function userHimselfData(req: any, res: any): Promise<void> {
  if (!req.headers.authorization) res.status(200).json(userHimselfDeleteInitialState);

  res.status(200).json(await userHimselfDeleteTypeGetPreview(req.headers.authorization));
}
