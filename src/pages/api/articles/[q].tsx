require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const response = await fetch(
    `${process.env.URL_API}/api/article?pagination[page]=${req.query.q}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&filters[waitingroom][$eq]=false&sort[1]=createdAt%3Adesc`
  );
  const data = response.json();
  data.then((response) => res.status(200).json(response));
  data.catch((err) => res.status(500).json({ err: "Internal Server Error" }));
}
