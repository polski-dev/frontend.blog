import Link from "next/link";
import Up from "assets/icon/up.svg";
import Time from "assets/icon/time.svg";
import { useRouter } from "next/router";
import Brand from "assets/icon/logo.svg";
import React, { useEffect } from "react";
import Search from "assets/icon/search.svg";
import Comment from "assets/icon/comment.svg";
import { ButtonInLink } from "components/atoms/button/component.button";
import { Header, Logo, SerachBox, UserPanelBox, Menu, Item } from "./index.header.style";
import SearchBar from "components/molecules/searchBar/component.searchBar.index";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const HeaderComponent = () => {
  const { pathname } = useRouter();

  return (
    <>
      <Header>
        <Container>
          <Row>
            <Logo>
              <Link href="/" passHref>
                <a>
                  <Brand />
                </a>
              </Link>
            </Logo>
            <SerachBox>
              <SearchBar />
            </SerachBox>
            <UserPanelBox>
              <ButtonInLink href="/l">Zaloguj</ButtonInLink>
            </UserPanelBox>

            <Menu>
              <Item active={pathname === "/" ? true : false}>
                <Link href="/">
                  <a>
                    <Search />
                    Wszystko
                  </a>
                </Link>
              </Item>
              <Item active={pathname === "/w" ? true : false}>
                <Link href="/w">
                  <a>
                    <Time />
                    Poczekalnia
                  </a>
                </Link>
              </Item>
              <Item active={pathname === "/b" ? true : false}>
                <Link href="/b">
                  <a>
                    <Up />
                    Najlepsze
                  </a>
                </Link>
              </Item>
              <Item active={pathname === "/c" ? true : false}>
                <Link href="/c">
                  <a>
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
