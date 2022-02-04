import type { NextPage } from "next";
import { ShortArticle } from "components/templates/section/component.section.index";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Home: NextPage = ({ tags, aticle }: any) => {
  return (
    <Container>
      <Row>
        <MenuPrimary tags={tags.data} />
        <Col xs={12} md={9} xl={8}>
          <ShortArticle data={aticle.data} slug="a" title="Blog" />
        </Col>
        <Col xl={2}>
          <MenuTable />
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  // top tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json();

  // aticle
  const aticleResponse = await fetch(`https://www.polski.dev/api/articles/1`);
  const aticle = await aticleResponse.json();

  // video
  const videoResponse = await fetch(`http://localhost:3000/api/video/1`);
  const video = await aticleResponse.json();

  console.log(video);

  return {
    props: {
      tags,
      aticle,
    },
  };
}

export default Home;
