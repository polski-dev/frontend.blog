import lodash from "lodash";
import Link from "next/link";
import { useContext } from "react";
import Up from "assets/icon/up.svg";
import User from "assets/icon/user.svg";
import Time from "assets/icon/time.svg";
import { useRouter } from "next/router";
import Github from "assets/icon/github.svg";
import Tiktok from "assets/icon/tiktok.svg";
import Youtube from "assets/icon/youtube.svg";
import Comment from "assets/icon/comment.svg";
import Instagram from "assets/icon/instagram.svg";
import { MenuContext } from "providers/providers.menu";
import { Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ButtonInLink } from "components/atoms/button/component.button";
import { GlobalStyle, Bg, BoxMenu, OffMenu, BoxContent, BoxTypeContent, BoxTypeContentQuantity, Title, List, Tag, SocialMedia } from "./component.menu.primary.style";

type MenuPrimaryType = {
  tags: { id: number; attributes: { title: string } }[];
};

export default function MenuPrimary({ tags }: MenuPrimaryType) {
  const { pathname } = useRouter();
  const { modeMenu, powerMenu, setPowerMenu } = useContext(MenuContext);

  return (
    <>
      <GlobalStyle power={powerMenu} />
      <Bg power={powerMenu} />
      <BoxMenu mode={modeMenu} power={powerMenu}>
        <OffMenu mode={modeMenu} onClick={() => setPowerMenu(false)}>
          <span></span>
          <span></span>
        </OffMenu>
        <BoxContent>
          <Title>Wybierz</Title>
          <BoxTypeContent>
            <ButtonInLink onClick={() => setPowerMenu(false)} href={pathname === "/search" || pathname === "/w/v" ? "/w" : "/"} title="blog" active={pathname === "/" || pathname === "/w" ? true : false}>
              Wszystko
            </ButtonInLink>
            <BoxTypeContentQuantity>0</BoxTypeContentQuantity>
            <ButtonInLink onClick={() => setPowerMenu(false)} href={pathname === "/w" || pathname === "/w/v" ? "/w" : "/"} title="blog" active={pathname === "/" || pathname === "/w" ? true : false}>
              Blog
            </ButtonInLink>
            <BoxTypeContentQuantity>0</BoxTypeContentQuantity>
            <ButtonInLink onClick={() => setPowerMenu(false)} href={pathname === "/w" || pathname === "/w/v" ? "/w/v" : "/v"} title="video" active={pathname === "/v" || pathname === "/w/v" ? true : false}>
              Video
            </ButtonInLink>
            <BoxTypeContentQuantity>0</BoxTypeContentQuantity>
          </BoxTypeContent>
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
                <a title="YouTube">
                  <Youtube />
                </a>
              </Link>
            </SocialMedia>
            <SocialMedia>
              <Link href="https://www.youtube.com">
                <a title="TikTok">
                  <Tiktok />
                </a>
              </Link>
            </SocialMedia>
            <SocialMedia>
              <Link href="https://www.youtube.com">
                <a title="Instagram">
                  <Instagram />
                </a>
              </Link>
            </SocialMedia>
            <SocialMedia>
              <Link href="https://www.youtube.com">
                <a title="Instagram">
                  <Github />
                </a>
              </Link>
            </SocialMedia>
          </List>
        </BoxContent>
      </BoxMenu>
    </>
  );
}
