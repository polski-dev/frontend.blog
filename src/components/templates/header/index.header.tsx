import Link from "next/link";
import Up from "assets/icon/up.svg";
import Time from "assets/icon/time.svg";
import { useRouter } from "next/router";
import Brand from "assets/icon/logo.svg";
import React, { useEffect, useContext } from "react";
import Search from "assets/icon/search.svg";
import Comment from "assets/icon/comment.svg";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Header, Hambuger, Logo, SerachBox, UserPanelBox, Menu, Item } from "./index.header.style";
import SearchBar from "components/molecules/searchBar/component.searchBar.index";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { MenuContext } from "providers/providers.menu";

const HeaderComponent = () => {
  const { pathname } = useRouter();
  const { modeMenu, powerMenu, setPowerMenu } = useContext(MenuContext);

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
              <ButtonInLink href="/l" title="zaloguj">
                Zaloguj
              </ButtonInLink>
            </UserPanelBox>

            <Menu>
              <Item active={pathname === "/" ? true : false}>
                <Link href="/">
                  <a title="wszystko">
                    <Search />
                    Wszystko
                  </a>
                </Link>
              </Item>
              <Item active={pathname === "/w" ? true : false}>
                <Link href="/w">
                  <a title="poczekalnia">
                    <Time />
                    Poczekalnia
                  </a>
                </Link>
              </Item>
              <Item active={pathname === "/b" ? true : false}>
                <Link href="/b">
                  <a title="najlepsze">
                    <Up />
                    Najlepsze
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
