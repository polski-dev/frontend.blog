import { TagType } from "types/database/types.database.tag";
import { UserType } from "types/database/types.database.user";
import { PostType } from "types/database/types.database.post";
import { ContentEnum } from "types/database/types.database.contentEnum";
import TagShortArticle from "../theme/component.contentShortList.theme.tag";
import UserShortArticle from "../theme/component.contentShortList.theme.user";
import ContentShortArticle from "../theme/component.contentShortList.theme.post";

export default function switchTcheme({ typ, post, tag, user, index, ref }: { typ: ContentEnum; post?: PostType; tag?: TagType; user?: UserType; index: number; ref: any }): JSX.Element | undefined {
  switch (typ) {
    case ContentEnum.searchPost:
      if (!!post) return <ContentShortArticle data={{ post }} key={index} ref={ref} />;
    case ContentEnum.searchUser:
      if (!!user) return <UserShortArticle data={{ user }} key={index} ref={ref} />;
    case ContentEnum.searchTag:
      if (!!tag) return <TagShortArticle data={{ tag }} key={index} ref={ref} />;
  }
}
