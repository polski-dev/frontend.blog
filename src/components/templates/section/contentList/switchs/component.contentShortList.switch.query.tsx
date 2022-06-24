import { postsFindFrontEnd, PostsFindType } from "utils/query/posts/find";
import { ContentEnum } from "types/database/types.database.contentEnum";

export const query = async ({ typ, content, page, id }: { typ: ContentEnum; content?: PostsFindType; page: number; id?: number }): Promise<PostsFindType | undefined> => {
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

    case ContentEnum.userPost:
      const userPosts: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.userPost, id });
      if (userPosts?.data && content?.data) userPosts.data = [...content?.data, ...userPosts.data];
      return userPosts;

    case ContentEnum.tagPost:
      const tagPosts: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.post, id });
      if (tagPosts?.data && content?.data) tagPosts.data = [...content?.data, ...tagPosts.data];
      return tagPosts;

    case ContentEnum.tagArticle:
      const tagArticle: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.article, id });
      if (tagArticle?.data && content?.data) tagArticle.data = [...content?.data, ...tagArticle.data];
      return tagArticle;

    case ContentEnum.tagVideo:
      const tagVideo: PostsFindType = await postsFindFrontEnd({ page, typ: ContentEnum.video, id });
      if (tagVideo?.data && content?.data) tagVideo.data = [...content?.data, ...tagVideo.data];
      return tagVideo;
  }
};
