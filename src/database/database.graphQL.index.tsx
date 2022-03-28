// content
import type { ContentShortType, ContentShortFromUserType } from "./content/database.content.index";
import { contentShortGetPreview, contentShortInitialState, contentShortFromUserGetPreview, contentShortFromUserInitialState } from "./content/database.content.index";

// article
import type { ArticleShortType, ArticeFullByIdType, ArticeWithOnlyTitleType, ArticeAddViewType, ArticeAddGradeType, ArticeAddCommentsType, ArticeGetListCommentsType, ArticeGetListCommentsItemType } from "./article/database.artice.index";
import {
  articleShortGetPreview,
  articleShortInitialState,
  articeFullByIdGetPreview,
  articeFullByIdInitialState,
  articeWithOnlyTitleGetPreview,
  articeWithOnlyTitleInitialState,
  articeAddViewGet,
  articeAddViewInitialState,
  articeAddGradeGet,
  articeAddGradeInitialState,
  articeAddCommentsGet,
  articeAddCommentsInitialState,
  articeGetListComments,
  articeGetListCommentsInitialState,
} from "./article/database.artice.index";

// video
import type { VideoShortType, VideoFullByIdType, VideoWithOnlyTitleType, VideoAddViewType, VideoAddGradeType, VideoAddCommentsType, VideoGetListCommentsType, VideoGetListCommentsItemType } from "./video/database.video.index";
import {
  videoShortGetPreview,
  videoShortInitialState,
  videoFullByIdGetPreview,
  videoFullByIdInitialState,
  videoWithOnlyTitleGetPreview,
  videoWithOnlyTitleInitialState,
  videoAddViewGet,
  videoAddViewInitialState,
  videoAddGradeGet,
  videoAddGradeInitialState,
  videoAddCommentsGet,
  videoAddCommentsInitialState,
  videoGetListComments,
  videoGetListCommentsInitialState,
} from "./video/database.video.index";

// tag
import type { TagWithOnlyTitleType, TagFullByIdType, TagSubscriptionStatusType, TagSubscriptionToggleType, TagStatisticsType } from "./tag/database.tag.index";
import {
  tagWithOnlyTitleAllGetPreviewList,
  tagWithOnlyTitleInitialState,
  tagFullByIdGetPreview,
  tagFullByIdInitialState,
  tagSubscriptionStatusGet,
  tagSubscriptionStatusInitialState,
  tagSubscriptionToggleGet,
  tagSubscriptionToggleInitialState,
  tagStatisticsGet,
  tagStatisticsInitialState,
} from "./tag/database.tag.index";

// search
import type { SearchShortContentType, SearchSugestContentType, SearchShortArticleType, SearchShortVideoType, SearchShortTagType, SearchShortUserType } from "./search/database.search.index";
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
import type { AuthSingUpType, AuthSingInType } from "./auth/database.auth.index";
import { authSingUpPost, authSingUpInitialState, authSingInPost, authSingInInitialState } from "./auth/database.auth.index";

// User
import type { UserByIdType, UserGetListType, UserSubscriptionStatusType, UserSubscriptionToggleType, UserStatisticsType } from "./user/database.user.index";
import {
  userByIdGetPreview,
  userByIdInitialState,
  userGetListPreview,
  userGetListInitialState,
  userSubscriptionStatusGet,
  userSubscriptionStatusInitialState,
  userSubscriptionToggleGet,
  userSubscriptionToggleInitialState,
  userStatisticsGet,
  userStatisticsInitialState,
} from "./user/database.user.index";

// export
export type {
  ContentShortType,
  ContentShortFromUserType,
  ArticleShortType,
  VideoShortType,
  VideoFullByIdType,
  VideoWithOnlyTitleType,
  VideoAddViewType,
  VideoAddGradeType,
  VideoAddCommentsType,
  VideoGetListCommentsType,
  VideoGetListCommentsItemType,
  TagWithOnlyTitleType,
  TagFullByIdType,
  TagSubscriptionStatusType,
  TagSubscriptionToggleType,
  TagStatisticsType,
  SearchSugestContentType,
  SearchShortContentType,
  SearchShortArticleType,
  SearchShortVideoType,
  SearchShortTagType,
  SearchShortUserType,
  CountUserType,
  AuthSingUpType,
  AuthSingInType,
  UserByIdType,
  UserGetListType,
  UserSubscriptionStatusType,
  UserSubscriptionToggleType,
  UserStatisticsType,
  ArticeFullByIdType,
  ArticeWithOnlyTitleType,
  ArticeAddViewType,
  ArticeAddGradeType,
  ArticeAddCommentsType,
  ArticeGetListCommentsType,
  ArticeGetListCommentsItemType,
};

export {
  contentShortGetPreview,
  contentShortInitialState,
  contentShortFromUserGetPreview,
  contentShortFromUserInitialState,
  articleShortGetPreview,
  articleShortInitialState,
  videoShortGetPreview,
  videoShortInitialState,
  videoFullByIdGetPreview,
  videoFullByIdInitialState,
  videoWithOnlyTitleGetPreview,
  videoWithOnlyTitleInitialState,
  videoAddViewGet,
  videoAddViewInitialState,
  videoAddGradeGet,
  videoAddGradeInitialState,
  videoAddCommentsGet,
  videoAddCommentsInitialState,
  videoGetListComments,
  videoGetListCommentsInitialState,
  tagWithOnlyTitleAllGetPreviewList,
  tagWithOnlyTitleInitialState,
  tagFullByIdGetPreview,
  tagFullByIdInitialState,
  tagSubscriptionStatusGet,
  tagSubscriptionStatusInitialState,
  tagSubscriptionToggleGet,
  tagSubscriptionToggleInitialState,
  tagStatisticsGet,
  tagStatisticsInitialState,
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
  authSingUpInitialState,
  authSingUpPost,
  authSingInInitialState,
  authSingInPost,
  userByIdInitialState,
  userByIdGetPreview,
  userGetListInitialState,
  userGetListPreview,
  userSubscriptionStatusGet,
  userSubscriptionStatusInitialState,
  userSubscriptionToggleGet,
  userSubscriptionToggleInitialState,
  userStatisticsGet,
  userStatisticsInitialState,
  articeFullByIdInitialState,
  articeFullByIdGetPreview,
  articeWithOnlyTitleInitialState,
  articeWithOnlyTitleGetPreview,
  articeAddViewGet,
  articeAddViewInitialState,
  articeAddGradeGet,
  articeAddGradeInitialState,
  articeAddCommentsGet,
  articeAddCommentsInitialState,
  articeGetListComments,
  articeGetListCommentsInitialState,
};
