import type { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Home: NextPage = ({ tags }: any) => {
  // console.log(stats);
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
  // Top Tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json();

  // Stats
  const contentBestResponse = await fetch(`https://www.polski.dev/api/count/content/best`);
  const contentBest = await contentBestResponse.json();
  const contentWaitingroomResponse = await fetch(`https://www.polski.dev/api/count/content/waitingroom`);
  const contentWaitingroom = await contentWaitingroomResponse.json();
  const contentCommentAllResponse = await fetch(`https://www.polski.dev/api/count/comment/all`);
  const contentCommentAll = await contentCommentAllResponse.json();

  console.log(contentCommentAll);

  console.log({ contentBest: contentBest.count, contentWaitingroom: contentWaitingroom.count, contentCommentAll: contentCommentAll.count });

  return {
    props: { tags },
  };
}

export default Home;
