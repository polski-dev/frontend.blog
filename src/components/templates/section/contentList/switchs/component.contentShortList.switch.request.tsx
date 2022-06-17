import {
  contentShortGetPreview,
  VideoShortType,
  videoShortGetPreview,
  ArticleShortType,
  articleShortGetPreview,
  searchShortContentGetPreview,
  SearchShortArticleType,
  searchShortArticleGetPreview,
  SearchShortVideoType,
  searchShortVideoGetPreview,
  SearchShortTagType,
  searchShortTagGetPreview,
  SearchShortUserType,
  searchShortUserGetPreview,
  ContentShortFromUserType,
  contentShortFromUserGetPreview,
  ContentShortWithTagType,
  contentShortWithTagGetPreview,
} from "utils/database/database.restAPI.index";

export const selectAPI = async ({ type, content, page, search, userId, tagId }: { type: string; content: any; page: number; search?: string; userId?: number; tagId?: number }) => {
  switch (type) {
    case "all":
      const all: any = await contentShortGetPreview(page, false);
      content.data.all.data = [...content.data.all.data, ...all?.data.all?.data];
      break;
    case "allFromUser":
      const allFromUser: ContentShortFromUserType = await contentShortFromUserGetPreview(page, userId || 0);
      const allFromUserData = !!allFromUser?.data.all?.data?.length ? allFromUser.data.all.data : [];
      content.data.all.data = [...content.data.all.data, ...allFromUserData];
      break;
    case "allWithTag":
      const allWithTag: ContentShortWithTagType = await contentShortWithTagGetPreview(page, tagId || 0);
      const allWithTagData = !!allWithTag?.data.all?.data?.length ? allWithTag.data.all.data : [];
      content.data.all.data = [...content.data.all.data, ...allWithTagData];
      break;
    case "articleWithTag":
      const articleWithTag: ContentShortWithTagType = await contentShortWithTagGetPreview(page, tagId || 0);
      const articleWithTagData = !!articleWithTag?.data.article?.data?.length ? articleWithTag.data.article?.data : [];
      content.data.article.data = [...content.data.article.data, ...articleWithTagData];
      break;
    case "videoWithTag":
      const videoWithTag: ContentShortWithTagType = await contentShortWithTagGetPreview(page, tagId || 0);
      const videoWithTagData = !!videoWithTag?.data.article?.data?.length ? videoWithTag.data.article?.data : [];
      content.data.video.data = [...content.data.video.data, ...videoWithTagData];
      break;
    case "userWithTag":
      const userWithTag: ContentShortWithTagType = await contentShortWithTagGetPreview(page, tagId || 0);
      const userWithTagData = !!userWithTag?.data.user?.data?.length ? userWithTag.data.user?.data : [];
      content.data.user.data = [...content.data.user.data, ...userWithTagData];
      break;
    case "allWaitingRoom":
      const allWaitingRoom: any = await contentShortGetPreview(page, true);
      content.data.all.data = [...content.data.all.data, ...allWaitingRoom?.data.all?.data];
      break;
    case "video":
      const video: VideoShortType = await videoShortGetPreview(page, false);
      content.data.video.data = [...content.data.video.data, ...video?.data.video?.data];
      break;
    case "videoWaitingRoom":
      const videoWaitingRoom: VideoShortType = await videoShortGetPreview(page, true);
      content.data.video.data = [...content.data.video.data, ...videoWaitingRoom?.data.video?.data];
      break;
    case "article":
      const article: ArticleShortType = await articleShortGetPreview(page, false);
      content.data.article.data = [...content.data.article.data, ...article?.data.article?.data];
      break;
    case "articleWaitingRoom":
      const articleWaitingRoom: ArticleShortType = await articleShortGetPreview(page, true);
      content.data.article.data = [...content.data.article.data, ...articleWaitingRoom?.data.article?.data];
      break;
    case "search":
      if (!!search?.length) {
        const searchContentShort: any = await searchShortContentGetPreview(page, search.toString());
        content.data.all.data = [...content.data.all.data, ...searchContentShort?.data.all?.data];
      }
    case "searchArticleShort":
      if (!!search?.length) {
        const searchArticleShort: SearchShortArticleType = await searchShortArticleGetPreview(page, search.toString());
        content.data.article.data = [...content.data.article.data, ...searchArticleShort?.data.article?.data];
      }
      break;
    case "searchVideoShort":
      if (!!search?.length) {
        const searchVideoShort: SearchShortVideoType = await searchShortVideoGetPreview(page, search.toString());
        content.data.video.data = [...content.data.video.data, ...searchVideoShort?.data.video?.data];
      }
      break;
    case "searchTagShort":
      if (!!search?.length) {
        const searchTagShort: SearchShortTagType = await searchShortTagGetPreview(page, search.toString());
        content.data.tag.data = [...content.data.tag.data, ...searchTagShort?.data.tag?.data];
      }
      break;
    case "searchUserShort":
      if (!!search?.length) {
        const searchUserShort: SearchShortUserType = await searchShortUserGetPreview(page, search.toString());
        content.data.user.data = [...content.data.user.data, ...searchUserShort?.data.user?.data];
      }
      break;
  }
};
