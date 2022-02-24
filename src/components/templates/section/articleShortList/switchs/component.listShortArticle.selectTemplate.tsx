import TagShortArticle from "../tag/component.listShortArticle.tag";
import UserShortArticle from "../user/content.listShortArticle.user";
import ContentShortArticle from "../content/component.listShortArticle.content";

export default function selectTemplateForContent(item: any, i: number, articeRef: any) {
  switch (item.type) {
    case "article":
    case "video":
    case "videoWaitingRoom":
    case "articleWaitingRoom":
      return <ContentShortArticle data={item} key={i} ref={articeRef} />;
    case "user":
      return <UserShortArticle data={item} key={i} ref={articeRef} />;
    case "tag":
      return <TagShortArticle data={item} key={i} ref={articeRef} />;
  }
}
