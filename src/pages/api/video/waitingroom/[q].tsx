require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const { q } = req.query;

  const response = await fetch(
    `${process.env.URL_API}/api/videos?pagination[page]=${q}&pagination[pageSize]=10&populate=cover&populate=tags&populate=author&filters[waitingroom][$eq]=true`
  );
  const data = response.json();
  data.then((response) => res.status(200).json(response));
  data.catch((err) => res.status(500).json({ err: "Internal Server Error" }));
}
