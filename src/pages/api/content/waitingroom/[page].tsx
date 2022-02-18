import { orderBy } from "lodash";
import { dataFromAPI } from "function/function.index";

export default async function contantWaitingroomAPI(req: any, res: any) {
  const { page } = req.query;
  if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const video = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "videoWaitingRoom").contentQueryAPI(parseInt(page));
  const article = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "articleWaitingRoom").contentQueryAPI(parseInt(page));

  res.status(200).json({
    all: {
      data: orderBy([...article.data, ...video.data], ["createdAt"], ["desc"]),
      meta: {
        pagination: {
          page: parseInt(page),
          pageSize: 20,
          pageCount: Math.ceil((article.meta.pagination.total + video.meta.pagination.total) / 10) === 0 ? 1 : Math.ceil((article.meta.pagination.total + video.meta.pagination.total) / 10),
          total: article.meta.pagination.total + video.meta.pagination.total,
        },
      },
    },
    article,
    video,
  });
}
