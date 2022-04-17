import Link from "next/link";
import Image from "next/image";
import Time from "assets/icon/time.svg";
import { useRouter } from "next/router";
import Brand from "assets/icon/logo.svg";
import Avatar from "assets/icon/avatar.svg";
import Search from "assets/icon/search.svg";
import Comment from "assets/icon/comment.svg";
import React, { useContext, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { MenuContext } from "providers/providers.menu";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import SearchBar from "components/molecules/searchBar/component.searchBar.index";
import { Row, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Header, Hambuger, Logo, SerachBox, UserPanelBox, Menu, Item, BoxAuthUser, BoxAuthorAvatar, BoxOptionUser, BoxOptionUserHeader } from "./index.header.style";

const HeaderComponent = () => {
  const { data } = useSession();
  const { pathname } = useRouter();
  const { modeMenu, setPowerMenu } = useContext(MenuContext);
  const [powerUserBox, setPowerUserBox] = useState(false);

  return (
    <>
      <Header>
        <Container>
          <Row>
            <Hambuger mode={modeMenu} onClick={() => setPowerMenu(true)}>
              <span></span>
              <span></span>
              <span></span>
            </Hambuger>
            <Logo>
              <Link href="/">
                <a title="polski.dev">
                  <Brand />
                </a>
              </Link>
            </Logo>
            <SerachBox>
              <SearchBar />
            </SerachBox>
            <UserPanelBox>
              {data ? (
                <BoxAuthUser>
                  <BoxAuthorAvatar
                    title={data.user?.name}
                    power={powerUserBox}
                    onBlur={() =>
                      setTimeout(() => {
                        setPowerUserBox(!powerUserBox);
                      }, 150)
                    }
                    onClick={() => setPowerUserBox(!powerUserBox)}
                  >
                    {data.user?.image ? <Image blurDataURL="/img/blur.png" src={data.user.image} width={30} height={30} alt={data.user.name ? data.user.name : ""} /> : <Avatar />}
                  </BoxAuthorAvatar>
                  <BoxOptionUser power={powerUserBox}>
                    <BoxOptionUserHeader>Witaj, {data.user?.name}</BoxOptionUserHeader>
                    <Link href="/d/a">
                      <a title="panel użytkownika">Dodaj artykół</a>
                    </Link>
                    <Link href="/d">
                      <a title="panel użytkownika">Panel użytkownika</a>
                    </Link>
                    <button onClick={() => signOut()} title="wyloguj">
                      Wyloguj
                    </button>
                  </BoxOptionUser>
                </BoxAuthUser>
              ) : (
                <ButtonLinkIn href="/auth/signin" title="zaloguj">
                  Zaloguj
                </ButtonLinkIn>
              )}
            </UserPanelBox>

            <Menu>
              <Item active={pathname === "/" || pathname === "/v" ? true : false}>
                <Link href="/">
                  <a title="wszystko">
                    <Search />
                    Strona główna
                  </a>
                </Link>
              </Item>
              <Item active={pathname === "/w" || pathname === "/w/a" || pathname === "/w/v" ? true : false}>
                <Link href={pathname === "/w/v" || pathname === "/w/a" || pathname === "/v" ? "/w/v" : "/w"}>
                  <a title={pathname === "/w/v" || pathname === "/v" ? "poczekalnia video" : pathname === "/w/a" || pathname === "/a" ? "poczekalnia artykułów" : "poczekalnia"}>
                    <Time />
                    Poczekalnia
                  </a>
                </Link>
              </Item>
              <Item active={pathname === "/c" ? true : false}>
                <Link href="/c">
                  <a title="kontakt">
                    <Comment />
                    Kontakt
                  </a>
                </Link>
              </Item>
            </Menu>
          </Row>
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
