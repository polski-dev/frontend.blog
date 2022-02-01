export default async function handler(req: any, res: any) {
  const { tag } = req.query;
  const response = await fetch(`https://polskidev.herokuapp.com/api/search/${tag}`);
  response
    .json()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err));
}
