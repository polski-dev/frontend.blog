import Link from "next/link";
import AvatarBasic from "assets/icon/avatar.svg";
import Birthday from "assets/icon/birthday.svg";
import LinkIcon from "assets/icon/link.svg";
import Point from "assets/icon/point.svg";
import Youtube from "assets/icon/youtube.svg";
import Google from "assets/icon/google.svg";
import Github from "assets/icon/github.svg";
import Instagram from "assets/icon/instagram.svg";
import { Button } from "components/atoms/button/component.button.index";
import { UserInfoBox, Avatar, Name, Description, List, Item } from "./component.user.infoBox.style";

export default function UserInfoBoxComponent() {
  return (
    <UserInfoBox>
      <Avatar>
        <AvatarBasic />
      </Avatar>
      <Button title="subskrybuj" className="btn">
        Subskrybuj
      </Button>
      <Name>Paweł Niedźwiecki</Name>
      <Description>Inżynier oprogramowania | Wolny strzelec | Współtwórca Open Source | Bloger techniczny</Description>
      <List>
        <Item>
          <Point /> Poland, Gorzów Wielkopolski
        </Item>
        <Item>
          <Birthday /> Dołączył w dniu 4 stycznia 2020
        </Item>
        <Item>
          <LinkIcon />
          <Link href="/">
            <a>https://www.uxu.pl</a>
          </Link>
        </Item>

        <Item>
          <Link href="/">
            <a>
              <Youtube />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Google />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Instagram />
            </a>
          </Link>
          <Link href="/">
            <a>
              <Github />
            </a>
          </Link>
        </Item>
      </List>
    </UserInfoBox>
  );
}
