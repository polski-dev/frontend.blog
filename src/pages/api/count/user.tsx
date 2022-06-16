import { countUserGetPreview } from "utils/database/database.graphQL.index";

export default async function countUser(res: any): Promise<void> {
  res.status(200).json(await countUserGetPreview());
}
