import { kebabCase, deburr } from "lodash";
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
import { RootState } from "store/store.index";
import Instagram from "assets/icon/instagram.svg";
import { useSelector, useDispatch } from "react-redux";
import { MenuContext } from "providers/providers.menu";
import { Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ButtonInLink } from "components/atoms/button/component.button";
import { GlobalStyle, Bg, BoxMenu, OffMenu, BoxContent, FiltrListContent, FiltrListContentItem, BoxTypeContentQuantity, Title, List, Tag, SocialMedia } from "./component.menu.primary.style";

type menuPromaryType = {
  title: string;
  data: { slug: string; title: string; quantity: number }[];
};

export default function MenuPrimary({ title, data }: menuPromaryType) {
  const { pathname } = useRouter();
  const story = useSelector((state: RootState) => state);
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
          <Title>{title}</Title>
          <FiltrListContent>
            {!!data?.length &&
              data.map((item, i: number) => {
                return (
                  <FiltrListContentItem key={i}>
                    <ButtonInLink onClick={() => setPowerMenu(false)} href={item.slug} title={item.title} active={pathname === item.slug ? true : false}>
                      {item.title}
                    </ButtonInLink>
                    <BoxTypeContentQuantity>{item.quantity}</BoxTypeContentQuantity>
                  </FiltrListContentItem>
                );
              })}
          </FiltrListContent>

          {!!story.tag.all.home.data.length && (
            <>
              <Title>Top tagi</Title>
              <List>
                {story.tag.all.home.data.map((tag, i: number) => (
                  <Tag key={i}>
                    <Link href={`/t/${kebabCase(deburr(tag.attributes.title.toLowerCase()))}`}>
                      <a title={tag.attributes.title}>
                        <span>#</span>
                        {tag.attributes.title}
                      </a>
                    </Link>
                  </Tag>
                ))}
              </List>
            </>
          )}
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
