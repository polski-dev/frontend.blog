import TagShortArticle from "../theme/component.contentShortList.theme.tag";
import UserShortArticle from "../theme/component.contentShortList.theme.user";
import { PostType, PostsTypEnum } from "types/database/types.database.post";
import ContentShortArticle from "../theme/component.contentShortList.theme.post";

export default function switchTcheme(item: PostType, i: number, postRef: any): JSX.Element | undefined {
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
