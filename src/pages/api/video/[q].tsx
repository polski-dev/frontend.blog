require("dotenv").config();

export default async function handler(req: any, res: any) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/videos?pagination[page]=${req.query.q}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&filters[waitingroom][$eq]=false&sort[1]=createdAt%3Adesc`
  )
    .then((r) => r.json())
    .then((data) => res.status(200).json(data))
    .catch(() => res.status(500).json({ err: "Internal Server Error" }));
}
