import axios from "axios";
import { PostsTypEnum } from "types/database/types.database.post";

export async function postsFindBackEnd({ published = true, typ = PostsTypEnum.all }: { published?: boolean; typ?: PostsTypEnum }) {
  const res = await axios.get(
    process.env.BACKEND_API_URL +
      `/api/post?sort=createdAt%3Adesc&publicationState=preview&filters[publishedAt][$null]=${!published}${
        typ === PostsTypEnum.all ? "" : typ === PostsTypEnum.article ? `&filters[typ][$eq]=article` : `&filters[typ][$eq]=video`
      }&populate=cover&populate=tags&populate=author&populate=author.avatar&populate=author.avatar`
  );
  return !!res?.data?.error ? res.data : res?.data;
}

export async function postsFindFrontEnd() {
  const res = await axios.get(`/api/post/count`);
  return !!res?.data?.error ? res.data : res?.data;
}
