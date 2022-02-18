require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const video = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/count/video/waitingroom/`)
    .then((r) => r.json())
    .then((r) => r.videos)
    .catch(() => 0);

  const article = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/count/article/waitingroom/`)
    .then((r) => r.json())
    .then((r) => r.articles)
    .catch(() => 0);

  res.status(200).json({ together: video + article, video, article });
}
