import Eye from "assets/icon/eye.svg";
import User from "assets/icon/user.svg";
import Document from "assets/icon/document.svg";

import { TagCountType } from "utils/query/tags/count";
import { ComponentAnimationCircleLoad } from "components/atoms/animation";
import { MenuTagStatsBox, BoxStats, List, Item } from "./component.menu.tagStats.style";

export default function ComponentMenuTagStats({ data }: { data?: { stats?: TagCountType } }): JSX.Element {
  return (
    <>
      <MenuTagStatsBox>
        <BoxStats>
          <List>
            <Item>
              <Eye /> {typeof data?.stats?.data?.views === "number" ? data?.stats?.data?.views : <ComponentAnimationCircleLoad size={1.6} />} Wyświetleń
            </Item>
            <Item>
              <User /> Obserwuje {typeof data?.stats?.data?.followTags === "number" ? data?.stats?.data?.followTags : <ComponentAnimationCircleLoad size={1.6} />} osób
            </Item>
            <Item>
              <Document /> {typeof data?.stats?.data?.publishedPost === "number" ? data?.stats?.data?.publishedPost : <ComponentAnimationCircleLoad size={1.6} />} postów na głownej
            </Item>
            <Item>
              <Document /> {typeof data?.stats?.data?.unPublishedPost === "number" ? data?.stats?.data?.unPublishedPost : <ComponentAnimationCircleLoad size={1.6} />} postów w poczekalni
            </Item>
          </List>
        </BoxStats>
      </MenuTagStatsBox>
    </>
  );
}
