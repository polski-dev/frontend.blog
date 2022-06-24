import { TagsCountType, TagCountType } from "./types/utils.request.posts.count.types";
import { tagsCountState, tagCountState } from "./state/utils.request.posts.count.state";
import { tagsCountBackEnd, tagsCountFrontEnd, tagCountBackEnd, tagCountFrontEnd } from "./query/utils.request.posts.count.query";

export type { TagsCountType, TagCountType };
export { tagsCountState, tagCountState, tagsCountBackEnd, tagsCountFrontEnd, tagCountBackEnd, tagCountFrontEnd };
