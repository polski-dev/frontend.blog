import { PostsCountType, PostCountType } from "./types/utils.request.posts.count.types";
import { postsCountState } from "./state/utils.request.posts.count.state";
import { postsCountBackEnd, postsCountFrontEnd } from "./query/utils.request.posts.count.query";

export type { PostsCountType, PostCountType };
export { postsCountState, postsCountBackEnd, postsCountFrontEnd };
