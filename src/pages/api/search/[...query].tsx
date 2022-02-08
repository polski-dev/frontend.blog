require("dotenv").config();
import lodash, { merge } from "lodash";

export default async function searchAPI(req: any, res: any) {
  const { query } = req.query;

  const standardMessage = {
    data: [],
    meta: {
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 0,
        total: 0,
      },
    },
  };

  const article = await fetch(
    `${process.env.URL_API}/api/article?pagination[page]=${query[0]}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[title][$containsi]=${query[1]}`
  )
    .then((r) => r.json())
    .then((d) => {
      if (!!d.data.length) {
        d.data.forEach((item: any) => (item.type = "article"));
        return d;
      }
      return Object.assign({ type: "article" }, standardMessage);
    })
    .catch((err) => Object.assign({ err: true, message: err }, standardMessage));

  const video = await fetch(
    `${process.env.URL_API}/api/videos?pagination[page]=${query[0]}&pagination[pageSize]=10&populate=cover&populate=comments&populate=grades&populate=tags&populate=author&populate[1]=author.avatar&sort[1]=createdAt%3Adesc&filters[title][$containsi]=${query[1]}`
  )
    .then((r) => r.json())
    .then((d) => {
      if (!!d.data.length) {
        d.data.forEach((item: any) => (item.type = "video"));
        return d;
      }
      return Object.assign({ type: "video" }, standardMessage);
    })
    .catch((err) => Object.assign({ err: true, message: err }, standardMessage));

  const users = await fetch(`${process.env.URL_API}/api/users?pagination[page]=${query[0]}&pagination[pageSize]=10&populate=avatar&sort[1]=createdAt%3Adesc&filters[username][$containsi]=${query[1]}`)
    .then((r) => r.json())
    .then((d) => {
      if (!!d.length) {
        d.forEach((item: any) => (item.type = "user"));
        return {
          data: d,
          meta: {
            pagination: {
              page: 1,
              pageSize: 10,
              pageCount: 0,
              total: d.length,
            },
          },
        };
      }
      return Object.assign({ type: "user" }, standardMessage);
    })
    .catch((err) => Object.assign({ err: true, message: err }, standardMessage));

  const tags = await fetch(`${process.env.URL_API}/api/tag?pagination[page]=${query[0]}&pagination[pageSize]=10&populate=cover&sort[1]=createdAt%3Adesc&filters[title][$containsi]=${query[1]}`)
    .then((r) => r.json())
    .then((d) => {
      if (!!d.data.length) {
        d.data.forEach((item: any) => (item.type = "tag"));
        return d;
      }
      return Object.assign({ type: "tags" }, standardMessage);
    })
    .catch((err) => Object.assign({ err: true, message: err }, standardMessage));

  res.status(200).json({
    all: {
      data: lodash.orderBy([...article.data, ...video.data, ...users.data, ...tags.data], ["views"], ["desc"]),
      meta: {
        pagination: {
          page: query[0],
          pageSize: 40,
          pageCount: 0,
          total: article.meta.pagination.total + video.meta.pagination.total + users.meta.pagination.total + tags.meta.pagination.total,
        },
      },
    },
    article,
    video,
    users,
    tags,
  });
}
