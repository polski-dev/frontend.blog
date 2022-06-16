import { PostsCountType } from "./types/utils.request.posts.count.types";
import { postsCountState } from "./state/utils.request.posts.count.state";
import { postsCountBackEnd, postsCountFrontEnd } from "./query/utils.request.posts.count.query";

export type { PostsCountType };
export { postsCountState, postsCountBackEnd, postsCountFrontEnd };
