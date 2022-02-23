// content
import type { ContentShortType } from "./content/database.content.index";
import { contentShortGetPreview, contentShortInitialState } from "./content/database.content.index";

// article
import type { ArticleShortType } from "./article/database.artice.index";
import { articleShortGetPreview, articleShortInitialState } from "./article/database.artice.index";

// video
import type { VideoShortType } from "./video/database.video.index";
import { videoShortGetPreview, videoShortInitialState } from "./video/database.video.index";

// tag
import type { TagWithOnlyTitleType } from "./tag/database.tag.index";
import { tagWithOnlyTitleAllGetPreviewList, tagWithOnlyTitleInitialState } from "./tag/database.tag.index";

// search
import type {
  SearchShortContentType,
  SearchSugestContentType,
  SearchShortArticleType,
  SearchShortVideoType,
  SearchShortTagType,
  SearchShortUserType,
} from "./search/database.search.index";
import {
  searchSugestContentGetPreview,
  searchSugestContentInitialState,
  searchShortContentGetPreview,
  searchShortContentInitialState,
  searchShortArticleGetPreview,
  searchShortArticleInitialState,
  searchShortVideoGetPreview,
  searchShortVideoInitialState,
  searchShortTagGetPreview,
  searchShortTagInitialState,
  searchShortUserGetPreview,
  searchShortUserInitialState,
} from "./search/database.search.index";

// count
import type { CountUserType } from "./count/database.count.index";
import { countUserGetPreview, countUserInitialState } from "./count/database.count.index";

// Auth
import type { AuthRegisterType } from "./auth/database.auth.index";
import { authRegisterPost, authRegisterInitialState } from "./auth/database.auth.index";

// export
export type {
  ContentShortType,
  ArticleShortType,
  VideoShortType,
  TagWithOnlyTitleType,
  SearchSugestContentType,
  SearchShortContentType,
  SearchShortArticleType,
  SearchShortVideoType,
  SearchShortTagType,
  SearchShortUserType,
  CountUserType,
  AuthRegisterType,
};

export {
  contentShortGetPreview,
  contentShortInitialState,
  articleShortGetPreview,
  articleShortInitialState,
  videoShortGetPreview,
  videoShortInitialState,
  tagWithOnlyTitleAllGetPreviewList,
  tagWithOnlyTitleInitialState,
  searchSugestContentGetPreview,
  searchSugestContentInitialState,
  searchShortContentGetPreview,
  searchShortContentInitialState,
  searchShortArticleGetPreview,
  searchShortArticleInitialState,
  searchShortVideoGetPreview,
  searchShortVideoInitialState,
  searchShortTagGetPreview,
  searchShortTagInitialState,
  searchShortUserGetPreview,
  searchShortUserInitialState,
  countUserInitialState,
  countUserGetPreview,
  authRegisterInitialState,
  authRegisterPost,
};
