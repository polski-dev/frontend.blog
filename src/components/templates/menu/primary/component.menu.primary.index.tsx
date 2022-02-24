import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { kebabCase, deburr } from "lodash";
import Github from "assets/icon/github.svg";
import Tiktok from "assets/icon/tiktok.svg";
import Youtube from "assets/icon/youtube.svg";
import { RootState } from "store/store.index";
import Instagram from "assets/icon/instagram.svg";
import { MenuContext } from "providers/providers.menu";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
import { GlobalStyle, Bg, BoxMenu, OffMenu, BoxContent, FiltrListContent, FiltrListContentItem, BoxTypeContentQuantity, Title, List, Tag, SocialMedia } from "./component.menu.primary.style";

type menuPromaryType = {
  title: string;
  data: { slug: string; title: string; quantity: number }[];
};

export default function MenuPrimary({ title, data }: menuPromaryType) {
  const { asPath } = useRouter();
  const story = useSelector((state: RootState) => state);
  const { powerMenu, setPowerMenu } = useContext(MenuContext);

  return (
    <>
      <GlobalStyle power={powerMenu} />
      <Bg power={powerMenu} />
      <BoxMenu power={powerMenu}>
        <OffMenu onClick={() => setPowerMenu(false)}>
          <span></span>
          <span></span>
        </OffMenu>
        <BoxContent>
          {!!data?.length && data.filter((item) => !!item.quantity).length ? (
            <>
              <Title>{title}</Title>
              <FiltrListContent>
                {data.map((item, i: number) => {
                  if (!!item.quantity)
                    return (
                      <FiltrListContentItem key={i}>
                        <ButtonLinkIn onClick={() => setPowerMenu(false)} href={item.slug} title={item.title} active={asPath === item.slug ? true : false}>
                          {item.title}
                        </ButtonLinkIn>
                        <BoxTypeContentQuantity>{item.quantity}</BoxTypeContentQuantity>
                      </FiltrListContentItem>
                    );
                })}
              </FiltrListContent>
            </>
          ) : null}

          <>
            <Title>Top tagi</Title>
            <List>
              {!!story.tag.home.data.length
                ? story.tag.home.data.slice(0, 5).map((tag: any, i: number) => (
                    <Tag key={i}>
                      <Link href={`/t/${kebabCase(deburr(tag.attributes.title.toLowerCase()))}`}>
                        <a title={tag.attributes.title}>
                          <span>#</span>
                          {tag.attributes.title}
                        </a>
                      </Link>
                    </Tag>
                  ))
                : new Array(5).fill(undefined).map((item: undefined, i: number) => {
                    return <ItemLoad height={2} key={i} style={{ width: "calc(100% - 8rem)" }} last={i === 4 ? true : false} />;
                  })}
            </List>
          </>

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
