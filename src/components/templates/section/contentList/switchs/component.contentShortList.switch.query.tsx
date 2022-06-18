import { postsFindFrontEnd, PostsFindType } from "utils/query/posts/find";
import { ContentEnum } from "types/database/types.database.contentEnum";

export const query = async ({ typ, content, page }: { typ: ContentEnum; content?: PostsFindType; page: number }): Promise<PostsFindType | undefined> => {
  switch (typ) {
    case ContentEnum.post:
      const resPost: PostsFindType = await postsFindFrontEnd({ page });
      if (resPost?.data && content?.data) resPost.data = [...content?.data, ...resPost.data];
      return resPost;

    case ContentEnum.unPost:
      const resUnPost: PostsFindType = await postsFindFrontEnd({ published: false, page, typ: ContentEnum.unPost });
      if (resUnPost?.data && content?.data) resUnPost.data = [...content?.data, ...resUnPost.data];
      return resUnPost;

    case ContentEnum.article:
      const resArticle: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.article });
      if (resArticle?.data && content?.data) resArticle.data = [...content?.data, ...resArticle.data];
      return resArticle;

    case ContentEnum.unArticle:
      const resUnArticle: PostsFindType = await postsFindFrontEnd({ published: false, page, typ: ContentEnum.unArticle });
      if (resUnArticle?.data && content?.data) resUnArticle.data = [...content?.data, ...resUnArticle.data];
      return resUnArticle;

    case ContentEnum.video:
      const resVideo: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.video });
      if (resVideo?.data && content?.data) resVideo.data = [...content?.data, ...resVideo.data];
      return resVideo;

    case ContentEnum.unVideo:
      const resUnVideo: PostsFindType = await postsFindFrontEnd({ published: false, page, typ: ContentEnum.unVideo });
      if (resUnVideo?.data && content?.data) resUnVideo.data = [...content?.data, ...resUnVideo.data];
      return resUnVideo;
  }
};
