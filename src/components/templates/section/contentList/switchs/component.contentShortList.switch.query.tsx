import { postsFindFrontEnd, PostsFindType } from "utils/query/posts/find";
import { ContentEnum } from "types/database/types.database.contentEnum";

export const query = async ({ typ, content, page }: { typ: ContentEnum; content?: PostsFindType; page: number }): Promise<PostsFindType | undefined> => {
  switch (typ) {
    case ContentEnum.post:
      const resPost: PostsFindType = await postsFindFrontEnd({ page });
      if (resPost?.data && content?.data) resPost.data = [...content?.data, ...resPost.data];
      return resPost;

    case ContentEnum.article:
      const resArticle: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.article });
      if (resArticle?.data && content?.data) resArticle.data = [...content?.data, ...resArticle.data];
      return resArticle;

    case ContentEnum.video:
      const resVideo: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.video });
      if (resVideo?.data && content?.data) resVideo.data = [...content?.data, ...resVideo.data];
      return resVideo;
  }
};
