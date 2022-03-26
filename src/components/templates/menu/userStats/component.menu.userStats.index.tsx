import Eye from "assets/icon/eye.svg";
import User from "assets/icon/user.svg";
import Hash from "assets/icon/hash.svg";
import Comment from "assets/icon/comment.svg";
import Document from "assets/icon/document.svg";
import useUser from "hooks/hooks.useUser";
import { MenuUserBox, BoxStats, List, Item, Header } from "./component.menu.userStats.style";

export default function MenuUserComponent({
  data: { id, learn, skilks },
}: {
  data: {
    id: number;
    learn: {
      data: {
        id: string;
        attributes: {
          title: string;
        };
      }[];
    };
    skilks: {
      data: {
        id: string;
        attributes: {
          title: string;
        };
      }[];
    };
  };
}) {
  const { statistics } = useUser({ id, type: "user" });

  return (
    <>
      <MenuUserBox>
        <BoxStats>
          <List>
            <Item>
              <User /> Subskrybuje {statistics.data?.followingmes} osób
            </Item>
            <Item>
              <Document /> {statistics.data?.addPosts} opublikował postów
            </Item>
            <Item>
              <Comment /> Napisał {statistics.data?.comments} komentarzy
            </Item>
            <Item>
              <Hash /> Obserwuje {statistics.data?.followTags} tagów
            </Item>
            <Item>
              <Eye /> {statistics.data?.views} Wyświetleń
            </Item>
          </List>
        </BoxStats>
        {!!skilks.data.length && (
          <List className="menu">
            <Item>
              <Header>Umiejętności</Header>
            </Item>
            {skilks.data.map((skill, i: number) => {
              return (
                <Item key={i}>
                  <span>#</span>
                  {skill.attributes.title}
                </Item>
              );
            })}
          </List>
        )}

        {!!learn.data.length && (
          <List className="menu">
            <Item>
              <Header>Uczę się</Header>
            </Item>
            {learn.data.map((subject, i: number) => {
              return (
                <Item key={i}>
                  <span>#</span>
                  {subject.attributes.title}
                </Item>
              );
            })}
          </List>
        )}
      </MenuUserBox>
    </>
  );
}
