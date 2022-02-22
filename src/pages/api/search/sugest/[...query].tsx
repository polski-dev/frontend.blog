import { orderBy } from "lodash";
import { contentSearchSugestGetPreview, contentSearchSugestInitialState, ContentSearchSugestType } from "database/database.graphQL.index";

export default async function searchAPI(req: any, res: any) {
  const [page, query] = req.query.query;

  // i check data
  if (parseInt(page) < 0) res.status(200).json(contentSearchSugestInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(500).json({ err: "wrong page number" });

  // query
  const content: ContentSearchSugestType = await contentSearchSugestGetPreview(0, false, query);

  content?.article.data.forEach((art: any) => (art.type = "article"));
  content?.video.data.forEach((art: any) => (art.type = "video"));
  content?.user.data.forEach((art: any) => (art.type = "user"));
  content?.tag.data.forEach((art: any) => (art.type = "tag"));

  // count page for all content
  const pageCount = Math.ceil(
    (content.article.meta.pagination.total + content.video.meta.pagination.total + content.user.meta.pagination.total + content.tag.meta.pagination.total) / 10
  );

  res.status(200).json({
    all: {
      data: orderBy([...content.article.data, ...content.video.data, ...content.user.data, ...content.tag.data], (item) => item.attributes?.views, ["desc"]),
      meta: {
        pagination: {
          page: parseInt(page) + 1,
          pageSize: 40,
          pageCount: pageCount === 0 ? 1 : pageCount,
          total:
            content.article.meta.pagination.total +
            content.video.meta.pagination.total +
            content.user.meta.pagination.total +
            content.tag.meta.pagination.total,
        },
      },
    },
    ...content,
  });
}
