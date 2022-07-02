import Link from "next/link";
import Brand from "assets/icon/logo.svg";
import { Footer, Logo, Menu, Item } from "./index.footer.style";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const HeaderComponent = () => {
  return (
    <>
      <Footer>
        <Container>
          <Row>
            <Logo>
              <Link href="/">
                <a title="polski.dev">
                  <Brand />
                </a>
              </Link>
            </Logo>

            <Menu>
              <Item>
                <Link href="/privacy-policy">
                  <a title="polityka prywatności">Polityka Prywatności</a>
                </Link>
              </Item>
              <Item>
                <Link href="/regulamin">
                  <a title="regulamin">Regulamin</a>
                </Link>
              </Item>
            </Menu>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

export default HeaderComponent;
