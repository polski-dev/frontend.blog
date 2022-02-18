require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const comment = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/count/comment/all/`)
    .then((r) => r.json())
    .then((r) => r.comment)
    .catch(() => 0);

  res.status(200).json({ count: comment });
}
