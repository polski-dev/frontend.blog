import Link from "next/link";
import Time from "assets/icon/time.svg";
import { useRouter } from "next/router";
import Brand from "assets/icon/logo.svg";
import React, { useContext } from "react";
import Search from "assets/icon/search.svg";
import Comment from "assets/icon/comment.svg";
import { MenuContext } from "providers/providers.menu";
import { useSession, signIn, signOut } from "next-auth/react";
import { ButtonLinkIn } from "components/atoms/button/component.button.index";
import SearchBar from "components/molecules/searchBar/component.searchBar.index";
import { Row, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Header, Hambuger, Logo, SerachBox, UserPanelBox, Menu, Item } from "./index.header.style";

const HeaderComponent = () => {
  const { pathname } = useRouter();
  const { modeMenu, setPowerMenu } = useContext(MenuContext);
  const { data } = useSession();

  console.log(data);

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
                <button onClick={() => signOut()}>Wyloguj</button>
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
