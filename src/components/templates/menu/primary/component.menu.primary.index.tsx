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
import { GlobalStyle, Bg, BoxMenu, Cover, OffMenu, BoxContent, FiltrListContent, FiltrListContentItem, BoxTypeContentQuantity, Title, List, SocialMedia } from "./component.menu.primary.style";

type menuPromaryType = {
  title: string;
  cover?: string | boolean;
  data: { slug: string; title: string; quantity: number }[];
};

export default function MenuPrimary({ title, data, cover }: menuPromaryType) {
  const { asPath } = useRouter();
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
              {typeof cover === "string" && <Cover>{!cover ? <Avatar /> : <Image layout="fill" placeholder="blur" blurDataURL="/img/blur.png" src={cover} alt={"pl"} />}</Cover>}
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
