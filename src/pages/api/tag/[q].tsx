require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const { q } = req.query;

  const response = await fetch(`${process.env.URL_API}/api/tag?pagination[page]=${q}&pagination[pageSize]=10&sort[1]=views%3Adesc`);
  const data = response.json();
  data.then((response) => res.status(200).json(response));
  data.catch((err) => res.status(500).json({ err: "Internal Server Error" }));
}
