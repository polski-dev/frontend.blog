import { postsFindFrontEnd, PostsFindType } from "utils/query/posts/find";
import { ContentEnum } from "types/database/types.database.contentEnum";

export const query = async ({ typ, content, page, id }: { typ: ContentEnum; content?: PostsFindType; page: number; id?: number }): Promise<PostsFindType | undefined> => {
  switch (typ) {
    case ContentEnum.post:
      const resPost: PostsFindType = await postsFindFrontEnd({ page });
      if (resPost?.data && content?.data) resPost.data = [...content?.data, ...resPost.data];
      return resPost;
      break;
    case ContentEnum.article:
      const resArticle: PostsFindType = await postsFindFrontEnd({ page, type: ContentEnum.article });
      if (resArticle?.data && content?.data) resArticle.data = [...content?.data, ...resArticle.data];
      return resArticle;
      break;
  }
};
