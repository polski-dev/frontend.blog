import axios from "axios";
import { PostsTypEnum } from "types/database/types.database.post";

export async function postsFindBackEnd({ published = true, typ = PostsTypEnum.all, page = 1 }: { published?: boolean; typ?: PostsTypEnum; page?: number }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/post?pagination[page]=${page}&sort=createdAt%3Adesc&publicationState=preview&filters[publishedAt][$null]=${!published}${
        typ === PostsTypEnum.all ? "" : typ === PostsTypEnum.article ? `&filters[typ][$eq]=article` : `&filters[typ][$eq]=video`
      }&populate=cover&populate=tags&populate=author&populate=author.avatar&populate=author.avatar`
  );
  return !!res?.data?.error ? res.data : res?.data;
}

export async function postsFindFrontEnd({ page }: { page: number }) {
  const res = page ? await axios.get(`/api/post/find/${page}`) : await axios.get(`/api/post/find/`);
  return !!res?.data?.error ? res.data : res?.data;
}
