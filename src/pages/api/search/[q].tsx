require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const { q } = req.query;
  const response = await fetch(`${process.env.URL_API}/api/search/${q}`);
  const data = response.json();
  let content = [];

  data.then((r) => {
    r.article.forEach((art: any) => (art.type = "article"));
    r.video.forEach((art: any) => (art.type = "video"));
    r.tag.forEach((art: any) => (art.type = "tag"));
    content = [...r.article, ...r.video, ...r.tag];
    res.status(200).json(lodash.orderBy(content, ["views"], ["desc"]).splice(0, 6));
  });

  data.catch((err) => res.status(500).json({ err: "Internal Server Error" }));
}
