import { userStatisticsGet, userStatisticsInitialState } from "database/database.graphQL.index";

export default async function UserStatisticsAPI(req: any, res: any): Promise<void> {
  const { idUser } = req.query;

  // i check id user
  if (parseInt(idUser) < 0) res.status(200).json(userStatisticsInitialState);

  res.status(200).json(await userStatisticsGet(parseInt(idUser)));
}
