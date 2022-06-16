import { orderBy } from "lodash";
import { searchSugestContentGetPreview, searchSugestContentInitialState, SearchSugestContentType } from "utils/database/database.graphQL.index";

export default async function searchAPI(req: any, res: any) {
  const [page, query] = req.query.query;

  // i check data
  if (parseInt(page) < 0) res.status(200).json(searchSugestContentInitialState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(400).json({ err: "wrong page number" });

  // query
  const content: SearchSugestContentType = await searchSugestContentGetPreview(0, false, query);

  content?.data.article.data.forEach((art: any) => (art.type = "article"));
  content?.data.video.data.forEach((art: any) => (art.type = "video"));
  content?.data.user.data.forEach((art: any) => (art.type = "user"));
  content?.data.tag.data.forEach((art: any) => (art.type = "tag"));

  // count page for all content
  const pageCount = Math.ceil((content.data.article.meta.pagination.total + content.data.video.meta.pagination.total + content.data.user.meta.pagination.total + content.data.tag.meta.pagination.total) / 10);

  res.status(200).json({
    data: {
      all: {
        data: orderBy([...content.data.article.data, ...content.data.video.data, ...content.data.user.data, ...content.data.tag.data], (item) => item.attributes?.views, ["desc"]),
        meta: {
          pagination: {
            page: parseInt(page) + 1,
            pageSize: 40,
            pageCount: pageCount === 0 ? 1 : pageCount,
            total: content.data.article.meta.pagination.total + content.data.video.meta.pagination.total + content.data.user.meta.pagination.total + content.data.tag.meta.pagination.total,
          },
        },
      },
      ...content.data,
    },
  });
}
