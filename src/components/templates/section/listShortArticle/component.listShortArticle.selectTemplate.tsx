import TagShortArticle from "./tag/component.listShortArticle.tag";
import UserShortArticle from "./user/content.listShortArticle.user";
import ContentShortArticle from "./content/component.listShortArticle.content";

export default function selectTemplateForContent(item: any, i: number, articeRef: any) {
  if (item.type === "article" || item.type === "video" || item.type === "videoWaitingRoom" || item.type === "articleWaitingRoom") {
    return <ContentShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />;
  } else if (item.type === "user") {
    return <UserShortArticle data={item} type={item.type} key={i} ref={articeRef} />;
  } else if (item.type === "tag") {
    return <TagShortArticle data={item.attributes} type={item.type} key={i} ref={articeRef} />;
  }
}
