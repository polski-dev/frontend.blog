require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const response = await fetch(`${process.env.URL_API}/api/count/comment/all/`);
  const data = response.json();

  data.then((comment) => res.status(200).json(comment));
  data.catch((err) => res.status(500).json({ err: "Internal Server Error" }));
}
