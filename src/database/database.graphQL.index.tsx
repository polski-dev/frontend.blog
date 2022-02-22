// content
import type { ContentType, ContentSearchSugestType } from "./content/database.content.index";
import { contentGetPreview, contentInitialState, contentSearchSugestGetPreview, contentSearchSugestInitialState } from "./content/database.content.index";
// article
import type { ArticleShortType } from "./article/database.artice.index";
import { articleShortGetPreview, articleShortInitialState } from "./article/database.artice.index";
// video
import type { VideoShortType } from "./video/database.video.index";
import { videoShortGetPreview, videoShortInitialState } from "./video/database.video.index";
// tag
import type { TagWithOnlyTitleType } from "./tag/database.tag.index";
import { tagWithOnlyTitleAllGetPreviewList, tagWithOnlyTitleInitialState } from "./tag/database.tag.index";

export type { ContentType, ContentSearchSugestType, ArticleShortType, VideoShortType, TagWithOnlyTitleType };

export {
  contentGetPreview,
  contentInitialState,
  contentSearchSugestGetPreview,
  contentSearchSugestInitialState,
  articleShortGetPreview,
  articleShortInitialState,
  videoShortGetPreview,
  videoShortInitialState,
  tagWithOnlyTitleAllGetPreviewList,
  tagWithOnlyTitleInitialState,
};
