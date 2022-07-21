import { PostsCountType, PostCountType } from "./types/utils.request.posts.count.types";
import { postCountState, postsCountState } from "./state/utils.request.posts.count.state";
import { postsCountBackEnd, postsCountFrontEnd, postCountBackEnd, postCountFrontEnd } from "./query/utils.request.posts.count.query";

export type { PostsCountType, PostCountType };
export { postCountState, postsCountState, postsCountBackEnd, postsCountFrontEnd, postCountBackEnd, postCountFrontEnd };
