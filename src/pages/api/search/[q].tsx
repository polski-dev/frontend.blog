require("dotenv").config();

export default async function handler(req: any, res: any) {
  const { q } = req.query;
  const response = await fetch(`${process.env.URL_API}/api/search/${q}`);
  response
    .json()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
}
