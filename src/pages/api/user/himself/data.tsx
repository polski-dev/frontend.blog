import { userHimselfDataGetPreview, userHimselfDataInitialState } from "utils/database/database.graphQL.index";

export default async function userHimselfData(req: any, res: any): Promise<void> {
  // i check page number
  if (!req.headers.authorization) res.status(200).json(userHimselfDataInitialState);

  res.status(200).json(await userHimselfDataGetPreview(req.headers.authorization));
}
