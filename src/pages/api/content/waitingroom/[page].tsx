import { orderBy } from "lodash";
import dataFromAPI from "function/function.dataFormAPI";

export default async function handler(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const video = await new dataFromAPI("videoWaitingRoom", parseInt(page)).contentQuery;
  const article = await new dataFromAPI("articleWaitingRoom", parseInt(page)).contentQuery;

  res.status(200).json({
    all: {
      data: orderBy([...article.data, ...video.data], ["views"], ["desc"]),
      meta: {
        pagination: {
          page: parseInt(page),
          pageSize: 20,
          pageCount: Math.ceil((article.meta.pagination.total + video.meta.pagination.total) / 10),
          total: article.meta.pagination.total + video.meta.pagination.total,
        },
      },
    },
    article,
    video,
  });
}
