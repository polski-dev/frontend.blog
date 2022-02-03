import type { NextPage } from "next";
import { ShortArticle } from "components/templates/section/component.section.index";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Home: NextPage = ({ tags, stats, aticle }: any) => {
  return (
    <Container>
      <Row>
        <MenuPrimary tags={tags.data} stats={stats} />
        <Col xs={12} md={9} xl={8}>
          <ShortArticle data={aticle.data} slug="a" title="Blog" />
        </Col>
        <Col xl={2} style={{ background: "blue" }}>
          Sidebar left
        </Col>
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  // top tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json();

  // stats
  const contentBestResponse = await fetch(`https://www.polski.dev/api/count/content/best`);
  const contentBest = await contentBestResponse.json();
  const contentWaitingroomResponse = await fetch(`https://www.polski.dev/api/count/content/waitingroom`);
  const contentWaitingroom = await contentWaitingroomResponse.json();
  const contentCommentAllResponse = await fetch(`https://www.polski.dev/api/count/comment/all`);
  const contentCommentAll = await contentCommentAllResponse.json();

  // aticle
  const aticleResponse = await fetch(`https://www.polski.dev/api/articles/1`);
  const aticle = await aticleResponse.json();

  return {
    props: {
      tags,
      aticle,
      stats: { contentBest: contentBest.count, contentWaitingroom: contentWaitingroom.count, contentCommentAll: contentCommentAll.count },
    },
  };
}

export default Home;
