import fetchAPI from "./fetchAPI/database.fetchAPI.restAPI";

import {
  ContentShortType,
  contentShortInitialState,
  TagWithOnlyTitleType,
  tagWithOnlyTitleInitialState,
  VideoShortType,
  videoShortInitialState,
  VideoFullByIdType,
  videoFullByIdInitialState,
  VideoWithOnlyTitleType,
  videoWithOnlyTitleInitialState,
  VideoAddViewType,
  videoAddViewInitialState,
  VideoAddGradeType,
  videoAddGradeInitialState,
  VideoAddCommentsType,
  videoAddCommentsInitialState,
  VideoGetListCommentsType,
  videoGetListCommentsInitialState,
  VideoGetListCommentsItemType,
  ArticleShortType,
  articleShortInitialState,
  SearchSugestContentType,
  searchSugestContentInitialState,
  SearchShortContentType,
  searchShortContentInitialState,
  SearchShortArticleType,
  searchShortArticleInitialState,
  SearchShortVideoType,
  searchShortVideoInitialState,
  SearchShortTagType,
  searchShortTagInitialState,
  SearchShortUserType,
  searchShortUserInitialState,
  AuthSingUpType,
  authSingUpInitialState,
  AuthSingInType,
  authSingInInitialState,
  UserByIdType,
  userByIdInitialState,
  UserGetListType,
  userGetListInitialState,
  ArticeFullByIdType,
  articeFullByIdInitialState,
  ArticeWithOnlyTitleType,
  articeWithOnlyTitleInitialState,
  ArticeAddViewType,
  articeAddViewInitialState,
  ArticeAddGradeType,
  articeAddGradeInitialState,
  ArticeAddCommentsType,
  articeAddCommentsInitialState,
  ArticeGetListCommentsType,
  articeGetListCommentsInitialState,
  ArticeGetListCommentsItemType,
} from "./database.graphQL.index";

// search
const searchSugestContentGetPreview: (search: string) => Promise<SearchSugestContentType> = async (search: string): Promise<SearchSugestContentType> => await fetchAPI({ path: `/api/search/sugest/0/${search}` });
const searchShortContentGetPreview: (page: number, search: string) => Promise<SearchShortContentType> = async (page: number, search: string): Promise<SearchShortContentType> => await fetchAPI({ path: `/api/search/${page}/${search}` });
const searchShortArticleGetPreview: (page: number, search: string) => Promise<SearchShortArticleType> = async (page: number, search: string): Promise<SearchShortArticleType> => await fetchAPI({ path: `/api/search/shortarticle/${page}/${search}` });
const searchShortVideoGetPreview: (page: number, search: string) => Promise<SearchShortVideoType> = async (page: number, search: string): Promise<SearchShortVideoType> => await fetchAPI({ path: `/api/search/shortvideo/${page}/${search}` });
const searchShortTagGetPreview: (page: number, search: string) => Promise<SearchShortTagType> = async (page: number, search: string): Promise<SearchShortTagType> => await fetchAPI({ path: `/api/search/shorttag/${page}/${search}` });
const searchShortUserGetPreview: (page: number, search: string) => Promise<SearchShortUserType> = async (page: number, search: string): Promise<SearchShortUserType> => await fetchAPI({ path: `/api/search/shortuser/${page}/${search}` });

// content
const contentShortGetPreview: (page: number, waitingroom: boolean) => Promise<ContentShortType> = async (page: number, waitingroom: boolean): Promise<ContentShortType> => await fetchAPI({ path: `/api/content/${page}`, body: { waitingroom } });

// tag
const tagWithOnlyTitleAllGetPreviewList: (page: number) => Promise<TagWithOnlyTitleType> = async (page: number): Promise<TagWithOnlyTitleType> => await fetchAPI({ path: `/api/tag/${page}` });

// article
const articleShortGetPreview: (page: number, waitingroom: boolean) => Promise<ArticleShortType> = async (page: number, waitingroom: boolean): Promise<ArticleShortType> => await fetchAPI({ path: `/api/article/${page}`, body: { waitingroom } });

const articleShortRestAPIGetPreview: (id: number) => Promise<ArticeFullByIdType> = async (id: number): Promise<ArticeFullByIdType> => await fetchAPI({ path: `/api/article/fullbyid/${id}` });

const articeWithOnlyTitleRestAPIGetPreview: (page: number) => Promise<ArticeWithOnlyTitleType> = async (page: number): Promise<ArticeWithOnlyTitleType> => await fetchAPI({ path: `/api/article/articeWithOnlyTitle/${page}` });

const articeAddViewGet: (id: number) => Promise<ArticeAddViewType> = async (id: number): Promise<ArticeAddViewType> => await fetchAPI({ path: `/api/article/addview/${id}` });
const articeAddComments: (idArticle: number, description: string, authorization: string) => Promise<ArticeAddCommentsType> = async (idArticle: number, description: string, authorization: string): Promise<ArticeAddCommentsType> =>
  await fetchAPI({ path: `/api/article/comment/add/${idArticle}`, authorization, body: { description } });

const articeGetListComments: (idArticle: number, page: number) => Promise<ArticeGetListCommentsType> = async (idArticle: number, page: number): Promise<ArticeGetListCommentsType> =>
  await fetchAPI({ path: `/api/article/comment/getlist/${idArticle}/${page}`, method: "GET" });

const articeAddGradeGet: (id: number, authorization: string, grade: string) => Promise<ArticeAddGradeType> = async (id: number, authorization: string, grade: string): Promise<ArticeAddGradeType> =>
  await fetchAPI({ path: `/api/article/grade/${id}`, authorization, body: { grade } });

// video
const videoShortGetPreview: (page: number, waitingroom: boolean) => Promise<VideoShortType> = async (page: number, waitingroom: boolean): Promise<VideoShortType> => await fetchAPI({ path: `/api/video/${page}`, body: { waitingroom } });
const videoShortRestAPIGetPreview: (id: number) => Promise<VideoFullByIdType> = async (id: number): Promise<VideoFullByIdType> => await fetchAPI({ path: `/api/video/fullbyid/${id}` });
const videoWithOnlyTitleRestAPIGetPreview: (page: number) => Promise<VideoWithOnlyTitleType> = async (page: number): Promise<VideoWithOnlyTitleType> => await fetchAPI({ path: `/api/video/videoWithOnlyTitle/${page}` });
const videoAddViewGet: (id: number) => Promise<VideoAddViewType> = async (id: number): Promise<VideoAddViewType> => await fetchAPI({ path: `/api/video/addview/${id}` });
const videoAddComments: (idVideo: number, description: string, authorization: string) => Promise<VideoAddCommentsType> = async (idVideo: number, description: string, authorization: string): Promise<VideoAddCommentsType> =>
  await fetchAPI({ path: `/api/video/comment/add/${idVideo}`, authorization, body: { description } });
const videoGetListComments: (idVideo: number, page: number) => Promise<VideoGetListCommentsType> = async (idVideo: number, page: number): Promise<VideoGetListCommentsType> =>
  await fetchAPI({ path: `/api/video/comment/getlist/${idVideo}/${page}`, method: "GET" });
const videoAddGradeGet: (id: number, authorization: string, grade: string) => Promise<VideoAddGradeType> = async (id: number, authorization: string, grade: string): Promise<VideoAddGradeType> =>
  await fetchAPI({ path: `/api/video/grade/${id}`, authorization, body: { grade } });

// auth
const authSingUpPost: (username: string, email: string, password: string) => Promise<AuthSingUpType> = async (username: string, email: string, password: string): Promise<AuthSingUpType> =>
  await fetchAPI({ path: `/api/auth/singup`, body: { username, email, password } });

const authSingInPost: (email: string, password: string) => Promise<AuthSingInType> = async (email: string, password: string): Promise<AuthSingInType> => await fetchAPI({ path: `/api/auth/singin`, body: { email, password } });

// user
const userByIdGetPreview: (id: number) => Promise<UserByIdType> = async (id: number): Promise<UserByIdType> => await fetchAPI({ path: `/api/user/byid/${id}` });

const userGetListPreview: (page: number) => Promise<UserGetListType> = async (page: number): Promise<UserGetListType> => await fetchAPI({ path: `/api/user/${page}` });

export type {
  ContentShortType,
  TagWithOnlyTitleType,
  VideoShortType,
  VideoFullByIdType,
  VideoWithOnlyTitleType,
  VideoAddViewType,
  VideoAddGradeType,
  VideoAddCommentsType,
  VideoGetListCommentsType,
  VideoGetListCommentsItemType,
  ArticleShortType,
  SearchSugestContentType,
  SearchShortContentType,
  SearchShortArticleType,
  SearchShortVideoType,
  SearchShortTagType,
  SearchShortUserType,
  AuthSingUpType,
  AuthSingInType,
  UserByIdType,
  ArticeFullByIdType,
  ArticeWithOnlyTitleType,
  ArticeAddViewType,
  ArticeAddGradeType,
  ArticeAddCommentsType,
  ArticeGetListCommentsType,
  ArticeGetListCommentsItemType,
};

export {
  contentShortInitialState,
  contentShortGetPreview,
  tagWithOnlyTitleInitialState,
  tagWithOnlyTitleAllGetPreviewList,
  videoShortInitialState,
  videoShortGetPreview,
  videoWithOnlyTitleRestAPIGetPreview,
  videoShortRestAPIGetPreview,
  videoFullByIdInitialState,
  videoWithOnlyTitleInitialState,
  videoAddViewGet,
  videoAddViewInitialState,
  videoAddGradeGet,
  videoGetListComments,
  videoAddComments,
  videoAddGradeInitialState,
  videoAddCommentsInitialState,
  videoGetListCommentsInitialState,
  articleShortInitialState,
  articleShortGetPreview,
  searchSugestContentInitialState,
  searchSugestContentGetPreview,
  searchShortContentInitialState,
  searchShortContentGetPreview,
  searchShortArticleInitialState,
  searchShortArticleGetPreview,
  searchShortVideoInitialState,
  searchShortVideoGetPreview,
  searchShortTagInitialState,
  searchShortTagGetPreview,
  searchShortUserInitialState,
  searchShortUserGetPreview,
  authSingUpInitialState,
  authSingUpPost,
  authSingInInitialState,
  authSingInPost,
  userByIdInitialState,
  userByIdGetPreview,
  articleShortRestAPIGetPreview,
  articeFullByIdInitialState,
  articeWithOnlyTitleRestAPIGetPreview,
  articeWithOnlyTitleInitialState,
  articeAddViewGet,
  articeAddViewInitialState,
  articeAddGradeGet,
  articeAddGradeInitialState,
  articeAddComments,
  articeAddCommentsInitialState,
  articeGetListComments,
  articeGetListCommentsInitialState,
};
