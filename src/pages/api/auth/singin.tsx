import { authSingInPost } from "utils/database/database.graphQL.index";

export default async function singIn(req: any, res: any): Promise<void> {
  const { email, password } = req.body;

  res.status(200).json(await authSingInPost(email, password));
}
