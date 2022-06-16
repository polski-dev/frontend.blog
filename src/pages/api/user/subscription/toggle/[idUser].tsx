import { userSubscriptionToggleGet, userSubscriptionToggleInitialState } from "utils/database/database.graphQL.index";

export default async function UserSubscriptionToggleAPI(req: any, res: any): Promise<void> {
  const { idUser } = req.query;

  // i check page number
  if (parseInt(idUser) < 0) res.status(200).json(userSubscriptionToggleInitialState);

  res.status(200).json(await userSubscriptionToggleGet(parseInt(idUser), req.headers.authorization));
}
