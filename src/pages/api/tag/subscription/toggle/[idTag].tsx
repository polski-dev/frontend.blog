import { tagSubscriptionToggleGet, tagSubscriptionToggleInitialState } from "utils/database/database.graphQL.index";

export default async function UserSubscriptionToggleAPI(req: any, res: any): Promise<void> {
  const { idTag } = req.query;

  // i check page number
  if (parseInt(idTag) < 0) res.status(200).json(tagSubscriptionToggleInitialState);

  res.status(200).json(await tagSubscriptionToggleGet(parseInt(idTag), req.headers.authorization));
}
