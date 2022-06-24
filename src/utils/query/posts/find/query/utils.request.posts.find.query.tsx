import axios from "axios";
import { ContentEnum } from "types/database/types.database.contentEnum";

export async function postsFindBackEnd({ published = true, typ = ContentEnum.post, page = 1, tagId, id }: { published?: boolean; typ?: ContentEnum; page?: number; tagId?: number; id?: number }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/post?pagination[page]=${page}&sort=createdAt%3Adesc&publicationState=preview&filters[publishedAt][$null]=${!published}${
        typ === ContentEnum.article || typ === ContentEnum.unArticle ? `&filters[typ][$eq]=article` : typ === ContentEnum.video || typ === ContentEnum.unVideo ? `&filters[typ][$eq]=video` : ""
      }&populate=cover&populate=tags&populate=author&populate=author.avatar&populate=author.avatar${typ === ContentEnum.userPost && !!id ? `&filters[author][id][$eq]=${id}` : ""}${!!tagId ? `&filters[tags][id][$eq]=${tagId}` : ""}`
  );
  return !!res?.data?.error ? res.data : res?.data;
}

export async function postsFindFrontEnd({ published = true, typ = ContentEnum.post, page = 1, id, tagId }: { published?: boolean; typ?: ContentEnum; page?: number; id?: number; tagId?: number }) {
  const res = await axios.get(`/api/post/find/`, {
    params: {
      id: id,
      typ: typ,
      page: page,
      tagId: tagId,
      published: published,
    },
  });

  return res.data;
}

export async function postFindOneBackEnd({ postId }: { postId: number }) {
  const res = await axios.get(process.env.BACKEND_API_URL + `/api/post/${postId}?populate=cover&populate=tags&populate=author&populate=author.avatar&populate=author.avatar`);

  return !!res?.data?.error ? res.data : res?.data;
}
