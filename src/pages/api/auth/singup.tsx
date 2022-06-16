import { authSingUpPost } from "utils/database/database.graphQL.index";

export default async function singUp(req: any, res: any): Promise<void> {
  const { username, email, password } = req.body;
  res.status(200).json(await authSingUpPost(username, email, password));
}
