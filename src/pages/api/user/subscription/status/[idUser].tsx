import { userSubscriptionStatusGet, userSubscriptionStatusInitialState } from "utils/database/database.graphQL.index";

export default async function UserSubscriptionToggleAPI(req: any, res: any): Promise<void> {
  const { idUser } = req.query;

  // i check id user
  if (parseInt(idUser) < 0) res.status(200).json(userSubscriptionStatusInitialState);

  res.status(200).json(await userSubscriptionStatusGet(parseInt(idUser), req.headers.authorization));
}
