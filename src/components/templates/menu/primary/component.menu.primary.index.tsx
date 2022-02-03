import lodash from "lodash";
import Link from "next/link";
import Up from "assets/icon/up.svg";
import User from "assets/icon/user.svg";
import Time from "assets/icon/time.svg";
import Github from "assets/icon/github.svg";
import Tiktok from "assets/icon/tiktok.svg";
import Youtube from "assets/icon/youtube.svg";
import Comment from "assets/icon/comment.svg";
import Instagram from "assets/icon/instagram.svg";
import { Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { BoxMenu, Title, List, Tag, SocialMedia, BoxState, DateState } from "./component.menu.primary.style";

type MenuPrimaryType = {
  tags: { id: number; attributes: { title: string } }[];
};

export default function MenuPrimary({ tags }: MenuPrimaryType) {
  return (
    <BoxMenu>
      <Title>Top tagi</Title>
      <List>
        {tags.map((tag, i: number) => (
          <Tag key={i}>
            <Link href={`/t/${lodash.kebabCase(lodash.deburr(tag.attributes.title.toLowerCase()))}`}>
              <a title={tag.attributes.title}>
                <span>#</span>
                {tag.attributes.title}
              </a>
            </Link>
          </Tag>
        ))}
      </List>
      <List>
        <SocialMedia>
          <Link href="https://www.youtube.com">
            <a>
              <Youtube />
            </a>
          </Link>
        </SocialMedia>
        <SocialMedia>
          <Link href="https://www.youtube.com">
            <a>
              <Tiktok />
            </a>
          </Link>
        </SocialMedia>
        <SocialMedia>
          <Link href="https://www.youtube.com">
            <a>
              <Instagram />
            </a>
          </Link>
        </SocialMedia>
        <SocialMedia>
          <Link href="https://www.youtube.com">
            <a>
              <Github />
            </a>
          </Link>
        </SocialMedia>
      </List>
      <BoxState>
        <DateState>
          <Up />0 na głownej
        </DateState>
        <DateState>
          <Time />0 w poczekalni
        </DateState>
        <DateState>
          <User />0 użytkowników
        </DateState>
        <DateState>
          <Comment />0 komentarzy
        </DateState>
      </BoxState>
    </BoxMenu>
  );
}
