import Head from "next/head";
import { NextPage } from "next";
import { useContext, useEffect } from "react";
import { RootState } from "store/store.index";

import { MenuContext } from "providers/providers.menu";
import { useSelector, useDispatch } from "react-redux";
import { addTag } from "store/slice/tag/store.slice.tag";
import { addContentAllHome } from "store/slice/content/store.slice.content";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ListShortArticle } from "components/templates/section/component.section.index";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";

const Home: NextPage = ({ tag, content }: any) => {
  const dispatch = useDispatch();
  const { setModeMenu } = useContext(MenuContext);
  const story = useSelector((state: RootState) => state);

  useEffect(() => setModeMenu("display"), [setModeMenu]);
  useEffect(() => {
    !story.tag.all.home.data.length && !!tag.data.length && dispatch(addTag({ all: tag }));
    !story.content.all.home.data.length && !!content.all.data && dispatch(addContentAllHome(content));
  }, [dispatch, content, tag, story]);

  if (content?.err || tag?.err) return <>Mamy problem z wczytaniem tego widoku spróbuj za 1h</>;

  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            title="Filtruj"
            data={[
              { slug: "/w", title: "Wszystko", quantity: content.all.meta.pagination.total },
              { slug: "/w/a", title: "Artykuły", quantity: content.article.meta.pagination.total },
              { slug: "/w/v", title: "Video", quantity: content.video.meta.pagination.total },
            ]}
          />
          <Col xs={12} md={9} xl={8}>
            <ListShortArticle data={content.video.data} type="videoWaitingRoom" />
          </Col>
          <MenuTable type="video" />
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // tag
  const tagResponse = await fetch(`https://www.polski.dev/api/tag/1`);
  const tag = await tagResponse.json().catch((err) => ({ err: true }));

  // content
  const contentResponse = await fetch(`https://www.polski.dev/api/content/waitingroom/1`);
  const content = await contentResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tag,
      content,
    },
  };
}

export default Home;
