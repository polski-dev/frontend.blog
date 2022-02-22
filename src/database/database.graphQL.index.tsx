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
import type { SearchShortContentType, SearchSugestContentType, SearchShortArticleType } from "./search/database.search.index";
import {
  searchSugestContentGetPreview,
  searchSugestContentInitialState,
  searchShortContentGetPreview,
  searchShortContentInitialState,
  searchShortArticleGetPreview,
  searchShortArticleInitialState,
} from "./search/database.search.index";

// export
export type {
  ContentShortType,
  ArticleShortType,
  VideoShortType,
  TagWithOnlyTitleType,
  SearchSugestContentType,
  SearchShortContentType,
  SearchShortArticleType,
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
};
