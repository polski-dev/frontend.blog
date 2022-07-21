import { authUserSingUpBackEnd } from "utils/query/auth/index";
import { MessageErrorInAPI } from "utils/messages/utils.messages.errors";

export default async function singUp(req: any, res: any): Promise<void> {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    res.status(200).json(await authUserSingUpBackEnd({ username, email, password }));
  } else res.status(404).json(MessageErrorInAPI({ status: 404, name: "NotFound", message: "NotFound" }));
}
