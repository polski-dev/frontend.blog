import { tagStatisticsGet, tagStatisticsInitialState } from "utils/database/database.graphQL.index";

export default async function TagStatisticsAPI(req: any, res: any): Promise<void> {
  const { idTag } = req.query;

  // i check id user
  if (parseInt(idTag) < 0) res.status(200).json(tagStatisticsInitialState);

  res.status(200).json(await tagStatisticsGet(parseInt(idTag)));
}
