import TagShortArticle from "../tag/component.listShortArticle.tag";
import UserShortArticle from "../user/content.listShortArticle.user";
import { PostType, PostsTypEnum } from "types/database/types.database.post";
import ContentShortArticle from "../content/component.listShortArticle.content";

export default function selectTemplateForContent(item: PostType, i: number, postRef: any): JSX.Element | undefined {
  switch (item.attributes.typ) {
    case PostsTypEnum.article:
    case PostsTypEnum.video:
      return <ContentShortArticle data={{ post: item }} key={i} ref={postRef} />;
    // case "user":
    //   return <UserShortArticle data={item} key={i} ref={articeRef} />;
    // case "tag":
    //   return <TagShortArticle data={item} key={i} ref={articeRef} />;
  }
}
