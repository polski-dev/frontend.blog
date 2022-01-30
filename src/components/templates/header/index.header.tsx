import Brand from "assets/icon/logo.svg";
import Link from "next/link";
import { Header, Logo } from "./index.header.style";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const HeaderComponent = () => {
  return (
    <>
      <Header>
        <Container>
          <Row>
            <Col xs={12}>
              <Logo href="/">
                <Brand />
              </Logo>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
