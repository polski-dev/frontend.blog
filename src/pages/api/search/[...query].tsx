require("dotenv").config();
import { orderBy } from "lodash";
import { dataFromAPI } from "function/function.index";
import initialState from "initialState/initialState.search";

export default async function searchAPI(req: any, res: any) {
  const [page, query] = req.query.query;
  if (parseInt(page) === 0) res.status(200).json(initialState);
  else if (!parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const article = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "searchArticle").contentQueryAPI(parseInt(page), query);
  const video = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "searchVideo").contentQueryAPI(parseInt(page), query);
  const user = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "searchUser").contentQueryAPI(parseInt(page), query);
  const tag = await new dataFromAPI(process.env.NEXT_PUBLIC_API_URL, "searchTag").contentQueryAPI(parseInt(page), query);

  res.status(200).json({
    all: {
      data: orderBy([...article.data, ...video.data, ...user.data, ...tag.data], ["views"], ["desc"]),
      meta: {
        pagination: {
          page: parseInt(page),
          pageSize: 40,
          pageCount:
            Math.ceil((article.meta.pagination.total + video.meta.pagination.total + user.meta.pagination.total + tag.meta.pagination.total) / 10) === 0
              ? 1
              : Math.ceil((article.meta.pagination.total + video.meta.pagination.total + user.meta.pagination.total + tag.meta.pagination.total) / 10),
          total: article.meta.pagination.total + video.meta.pagination.total + user.meta.pagination.total + tag.meta.pagination.total,
        },
      },
    },
    article,
    video,
    user,
    tag,
  });
}
