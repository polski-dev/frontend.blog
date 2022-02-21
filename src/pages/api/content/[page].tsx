import { orderBy } from "lodash";
import { contentGetPreview, contentInitialState, ContentType } from "database/database.graphQL.index";

export default async function contentAPI(req: any, res: any) {
  const { page } = req.query;
  const { waitingroom = false } = req.body;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(contentInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(500).json({ err: "wrong page number" });

  const content: ContentType = await contentGetPreview(parseInt(page), waitingroom);

  // add type content
  content?.article.data.forEach((art: any) => (art.type = "article"));
  content?.video.data.forEach((art: any) => (art.type = "video"));

  // count page for all content
  const pageCount = Math.ceil((content.article.meta.pagination.total + content.video.meta.pagination.total) / 10);

  res.status(200).json({
    all: {
      data: orderBy([...content.article.data, ...content.video.data], ["views"], ["desc"]),
      meta: {
        pagination: {
          page: parseInt(page) + 1,
          pageSize: 20,
          pageCount: pageCount === 0 ? 1 : pageCount,
          total: content.article.meta.pagination.total + content.video.meta.pagination.total,
        },
      },
    },
    ...content,
  });
}
