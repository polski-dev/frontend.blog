import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";
import Avatar from "assets/icon/avatar.svg";
import Github from "assets/icon/github.svg";
import Tiktok from "assets/icon/tiktok.svg";
import Youtube from "assets/icon/youtube.svg";
import Instagram from "assets/icon/instagram.svg";
import { MenuContext } from "providers/providers.menu";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import { GlobalStyle, Bg, BoxMenu, Cover, OffMenu, BoxContent, FiltrListContent, FiltrListContentItem, BoxTypeContentQuantity, Title, List, SocialMedia } from "./component.menu.main.style";

export default function MenuPrimary({ data }: { data?: { title?: string; cover?: { url: string; title?: string }; links?: { slug: string; title: string; count: number }[] } }) {
  const { asPath } = useRouter();
  const { showMenu, setShowMenu } = useContext(MenuContext);

  return (
    <>
      <GlobalStyle power={showMenu} />
      <Bg power={showMenu} />
      <BoxMenu power={showMenu}>
        <OffMenu onClick={() => {}}>
          <span></span>
          <span></span>
        </OffMenu>
        <BoxContent>
          {!!data?.links?.length && (
            <>
              {typeof data.cover?.url === "string" && <Cover>{!data?.cover.url ? <Avatar /> : <Image layout="fill" placeholder="blur" blurDataURL="/img/blur.png" src={data?.cover.url} alt={data?.cover?.title} />}</Cover>}
              <Title>{data?.title || "Dodaj tytuł"}</Title>
              <FiltrListContent>
                {data.links.map((item, i: number) => {
                  if (!!item.count)
                    return (
                      <FiltrListContentItem key={i}>
                        <ButtonLinkIn onClick={() => setShowMenu(false)} href={item.slug} title={item.title} active={asPath === item.slug ? true : false}>
                          {item.title}
                        </ButtonLinkIn>
                        <BoxTypeContentQuantity>{item.count}</BoxTypeContentQuantity>
                      </FiltrListContentItem>
                    );
                })}
              </FiltrListContent>
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