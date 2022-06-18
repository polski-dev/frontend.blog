import axios from "axios";
import { ContentEnum } from "types/database/types.database.contentEnum";

export async function postsFindBackEnd({ published = true, typ = ContentEnum.all, page = 1 }: { published?: boolean; typ?: ContentEnum; page?: number }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/post?pagination[page]=${page}&sort=createdAt%3Adesc&publicationState=preview&filters[publishedAt][$null]=${!published}${
        typ === ContentEnum.all ? "" : typ === ContentEnum.article ? `&filters[typ][$eq]=article` : `&filters[typ][$eq]=video`
      }&populate=cover&populate=tags&populate=author&populate=author.avatar&populate=author.avatar`
  );
  return !!res?.data?.error ? res.data : res?.data;
}

export async function postsFindFrontEnd({ published = true, typ = ContentEnum.all, page = 1 }: { published?: boolean; typ?: ContentEnum; page?: number }) {
  const res = await axios.get(`/api/post/find/`, {
    params: {
      typ: typ,
      page: page,
      published: published,
    },
  });

  return !!res?.data?.error ? res.data : res?.data;
}
