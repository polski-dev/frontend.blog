import { tagSubscriptionStatusGet, tagSubscriptionStatusInitialState } from "database/database.graphQL.index";

export default async function TagSubscriptionToggleAPI(req: any, res: any): Promise<void> {
  const { idTag } = req.query;

  // i check id user
  if (parseInt(idTag) < 0) res.status(200).json(tagSubscriptionStatusInitialState);

  res.status(200).json(await tagSubscriptionStatusGet(parseInt(idTag), req.headers.authorization));
}
