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
} from "database/database.restAPI.index";

export const selectAPI = async (type: string, content: any, page: number, search?: string) => {
  switch (type) {
    case "all":
      const all: any = await contentShortGetPreview(page, false);
      content.all.data = [...content.all.data, ...all?.all?.data];
      break;
    case "allWaitingRoom":
      const allWaitingRoom: any = await contentShortGetPreview(page, true);
      content.all.data = [...content.all.data, ...allWaitingRoom?.all?.data];
      break;
    case "video":
      const video: VideoShortType = await videoShortGetPreview(page, false);
      content.video.data = [...content.video.data, ...video?.video?.data];
      break;
    case "videoWaitingRoom":
      const videoWaitingRoom: VideoShortType = await videoShortGetPreview(page, true);
      content.video.data = [...content.video.data, ...videoWaitingRoom?.video?.data];
      break;
    case "article":
      const article: ArticleShortType = await articleShortGetPreview(page, false);
      content.article.data = [...content.article.data, ...article?.article?.data];
      break;
    case "articleWaitingRoom":
      const articleWaitingRoom: ArticleShortType = await articleShortGetPreview(page, true);
      content.article.data = [...content.article.data, ...articleWaitingRoom?.article?.data];
      break;
    case "search":
      if (!!search?.length) {
        const searchContentShort: any = await searchShortContentGetPreview(page, search.toString());
        content.all.data = [...content.all.data, ...searchContentShort?.all?.data];
      }
    case "searchArticleShort":
      if (!!search?.length) {
        const searchArticleShort: SearchShortArticleType = await searchShortArticleGetPreview(page, search.toString());
        content.article.data = [...content.article.data, ...searchArticleShort?.article?.data];
      }
      break;
    case "searchVideoShort":
      if (!!search?.length) {
        const searchVideoShort: SearchShortVideoType = await searchShortVideoGetPreview(page, search.toString());
        content.video.data = [...content.video.data, ...searchVideoShort?.video?.data];
      }
      break;
    case "searchTagShort":
      if (!!search?.length) {
        const searchTagShort: SearchShortTagType = await searchShortTagGetPreview(page, search.toString());
        content.tag.data = [...content.tag.data, ...searchTagShort?.tag?.data];
      }
      break;
    case "searchUserShort":
      if (!!search?.length) {
        const searchUserShort: SearchShortUserType = await searchShortUserGetPreview(page, search.toString());
        content.user.data = [...content.user.data, ...searchUserShort?.user?.data];
      }
      break;
  }
};
