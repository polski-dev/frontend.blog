import Eye from "assets/icon/eye.svg";
import User from "assets/icon/user.svg";
import Hash from "assets/icon/hash.svg";
import Comment from "assets/icon/comment.svg";
import Document from "assets/icon/document.svg";

import { UserCountType } from "utils/query/user/count";
import { ComponentAnimationCircleLoad } from "components/atoms/animation";
import { SkilksType, LearnType } from "types/database/types.database.user";
import { MenuUserBox, BoxStats, List, Item, Header } from "./component.menu.userStats.style";

export default function ComponentMenuUserStats({ data }: { data?: { stats?: UserCountType; skilks?: SkilksType[] | null; learn?: LearnType[] | null } }) {
  return (
    <>
      <MenuUserBox>
        <BoxStats>
          <List>
            <Item>
              <User /> Subskrybuje {typeof data?.stats?.data?.followingmes === "number" ? data?.stats?.data?.followingmes : <ComponentAnimationCircleLoad size={1.6} />} osób
            </Item>
            <Item>
              <User /> Obserwuje {typeof data?.stats?.data?.followusers === "number" ? data?.stats?.data?.followusers : <ComponentAnimationCircleLoad size={1.6} />} osób
            </Item>
            <Item>
              <Document /> Napisał {typeof data?.stats?.data?.posts === "number" ? data?.stats?.data?.posts : <ComponentAnimationCircleLoad size={1.6} />} postów
            </Item>
            <Item>
              <Comment /> Napisał {typeof data?.stats?.data?.commentsAdded === "number" ? data?.stats?.data?.commentsAdded : <ComponentAnimationCircleLoad size={1.6} />} komentarzy
            </Item>
            <Item>
              <Hash /> Obserwuje {typeof data?.stats?.data?.followtags === "number" ? data?.stats?.data?.followtags : <ComponentAnimationCircleLoad size={1.6} />} tagów
            </Item>
            <Item>
              <Eye /> {typeof data?.stats?.data?.views === "number" ? data?.stats?.data?.views : <ComponentAnimationCircleLoad size={1.6} />} Wyświetleń
            </Item>
          </List>
        </BoxStats>
        {!!data?.skilks?.length && (
          <List className="menu">
            <Item>
              <Header>Umiejętności</Header>
            </Item>
            {data?.skilks?.map((skill: SkilksType, i: number): JSX.Element => {
              return (
                <Item key={i}>
                  <span>#</span>
                  {skill.title}
                </Item>
              );
            })}
          </List>
        )}

        {!!data?.learn?.length && (
          <List className="menu">
            <Item>
              <Header>Uczę się</Header>
            </Item>
            {data?.learn.map((subject: LearnType, i: number): JSX.Element => {
              return (
                <Item key={i}>
                  <span>#</span>
                  {subject.title}
                </Item>
              );
            })}
          </List>
        )}
      </MenuUserBox>
    </>
  );
}
