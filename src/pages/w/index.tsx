import Head from "next/head";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { MenuContext } from "providers/providers.menu";
import { ShortArticle } from "components/templates/section/component.section.index";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

import { RootState } from "store/store.index";
import { useSelector, useDispatch } from "react-redux";
import { addArticleWaitingRoom, countPageArticleWaitingRoom } from "store/slice/store.slice.content";

const HomeWaitingRoom: NextPage = ({ tags, videos, aticles, quantityContent }: any) => {
  const dispatch = useDispatch();
  const { setModeMenu } = useContext(MenuContext);
  const story = useSelector((state: RootState) => state);

  useEffect(() => setModeMenu("display"), [setModeMenu]);
  useEffect(() => {
    !story.article.waitingRoom.articles.length && dispatch(countPageArticleWaitingRoom({ quantity: quantityContent.video }));
    !story.article.waitingRoom.articles.length && dispatch(addArticleWaitingRoom({ data: aticles.data }));
  }, [dispatch, story, quantityContent, aticles]);

  if (tags?.err || aticles?.err || videos?.err) return <>Mamy problem z wczytaniem tego widoku spróbuj za 1h</>;

  return (
    <>
      <Head>
        <title>Poczekalnia | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary tags={tags.data} />
          <Col xs={12} md={9} xl={8}>
            <ShortArticle data={aticles.data} type="articleWaitingRoom" />
          </Col>
          <MenuTable data={aticles.data} title="video" type="video" />
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // top tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json().catch((err) => ({ err: true }));

  // video
  const videosResponse = await fetch(`https://www.polski.dev/api/videos/1`);
  const videos = await videosResponse.json().catch((err) => ({ err: true }));

  // aticle new
  const aticlesResponse = await fetch(`https://www.polski.dev/api/articles/waitingroom/1`);
  const aticles = await aticlesResponse.json().catch((err) => ({ err: true }));

  // count content
  const quantityContentResponse = await fetch(`https://www.polski.dev/api/count/content/waitingroom`);
  const quantityContent = await quantityContentResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tags,
      videos,
      aticles,
      quantityContent,
    },
  };
}

export default HomeWaitingRoom;
