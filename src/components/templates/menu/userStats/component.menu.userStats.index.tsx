import Eye from "assets/icon/eye.svg";
import User from "assets/icon/user.svg";
import Hash from "assets/icon/hash.svg";
import Comment from "assets/icon/comment.svg";
import Document from "assets/icon/document.svg";
import { MenuUserBox, BoxStats, List, Item, Header } from "./component.menu.userStats.style";

export default function MenuUserComponent() {
  return (
    <>
      <MenuUserBox>
        <BoxStats>
          <List>
            <Item>
              <User /> Subskrybuje 27 osób
            </Item>
            <Item>
              <Document /> 27 opublikował postów
            </Item>
            <Item>
              <Comment /> Napisał 21 komentarzy
            </Item>
            <Item>
              <Hash /> Obserwuje 13 tagów
            </Item>
            <Item>
              <Eye /> 12154 Wyświetleń
            </Item>
          </List>
        </BoxStats>

        <List className="menu">
          <Item>
            <Header>Umiejętności</Header>
          </Item>
          <Item>
            <span>#</span>JavaScript
          </Item>
          <Item>
            <span>#</span>JavaScript
          </Item>
          <Item>
            <span>#</span>JavaScript
          </Item>
        </List>

        <List className="menu">
          <Item>
            <Header>Uczę się</Header>
          </Item>
          <Item>
            <span>#</span>JavaScript
          </Item>
          <Item>
            <span>#</span>JavaScript
          </Item>
          <Item>
            <span>#</span>JavaScript
          </Item>
        </List>
      </MenuUserBox>
    </>
  );
}
