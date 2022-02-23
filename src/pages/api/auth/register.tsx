import { authRegisterPost } from "database/database.graphQL.index";

export default async function contentAPI(req: any, res: any): Promise<void> {
  const { username, email, password } = req.body;
  res.status(200).json(await authRegisterPost(username, email, password));
}
