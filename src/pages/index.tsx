import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { MenuContext } from "providers/providers.menu";
import { ShortArticle } from "components/templates/section/component.section.index";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Home: NextPage = ({ tags, videos, aticles }: any) => {
  const { setModeMenu } = useContext(MenuContext);
  useEffect(() => {
    setModeMenu("display");
  }, [setModeMenu]);

  if (tags?.err || aticles?.err || videos?.err) return <>Mamy problem z wczytaniem tego widoku spróbuj za 1h</>;
  return (
    <Container>
      <Row>
        <MenuPrimary tags={tags.data} />
        <Col xs={12} md={9} xl={8}>
          <ShortArticle data={aticles.data} slug="a" title="Blog" />
        </Col>
        <MenuTable data={videos.data} title="video" slug="v" />
      </Row>
    </Container>
  );
};

export async function getStaticProps() {
  // top tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json().catch((err) => ({ err: true }));

  // video
  const videosResponse = await fetch(`https://www.polski.dev/api/videos/1`);
  const videos = await videosResponse.json().catch((err) => ({ err: true }));

  // aticle
  const aticlesResponse = await fetch(`https://www.polski.dev/api/articles/1`);
  const aticles = await aticlesResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tags,
      videos,
      aticles,
    },
  };
}

export default Home;
