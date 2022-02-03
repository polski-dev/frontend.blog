import type { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Home: NextPage = ({ tags }: any) => {
  return (
    <Container>
      <Row>
        <MenuPrimary tags={tags.data}></MenuPrimary>
        <Col xs={12} md={9} xl={8} style={{ background: "red" }}>
          Center
        </Col>
        <Col xl={2} style={{ background: "blue" }}>
          Sidebar left
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  const queryTag = 1;
  // Top Tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json();

  // Stats

  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  // Pass data to the page via props
  return { props: { tags } };
}

export default Home;
