require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const users = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/`)
    .then((r) => r.json())
    .then((r) => r.length)
    .catch(() => 0);

  res.status(200).json({ count: users });
}
