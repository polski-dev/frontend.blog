import axios, { AxiosResponse, AxiosError } from "axios";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { PostsFindType, PostFindOneType } from "./../types/utils.request.posts.find.types";

export async function postsFindBackEnd({ published = true, typ = ContentEnum.post, page = 1, tagId, id }: { published?: boolean; typ?: ContentEnum; page?: number; tagId?: number; id?: number }): Promise<PostsFindType> {
  let data = {};
  try {
    const postsFind: AxiosResponse<PostsFindType> = await axios.get(
      process.env.BACKEND_API_URL +
        `/api/post?pagination[page]=${page}&sort=createdAt%3Adesc&publicationState=preview&filters[publishedAt][$null]=${!published}${
          typ === ContentEnum.article || typ === ContentEnum.unArticle ? `&filters[typ][$eq]=article` : typ === ContentEnum.video || typ === ContentEnum.unVideo ? `&filters[typ][$eq]=video` : ""
        }&populate=cover&populate=tags&populate=author&populate=author.avatar&populate=author.avatar${typ === ContentEnum.userPost && !!id ? `&filters[author][id][$eq]=${id}` : ""}${!!tagId ? `&filters[tags][id][$eq]=${tagId}` : ""}`
    );

    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostsFindType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
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

export async function postFindOneBackEnd({ postId }: { postId: number }): Promise<PostFindOneType> {
  let data = {};
  try {
    const postsFind: AxiosResponse<PostFindOneType> = await axios.get(process.env.BACKEND_API_URL + `/api/post/${postId}?populate=cover&populate=tags&populate=author&populate=author.avatar&populate=author.avatar`);
    data = postsFind.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<PostFindOneType>;
      if (serverError && serverError.response) {
        data = serverError.response.data;
      }
    } else data = { data: null };
  }

  return data;
}
