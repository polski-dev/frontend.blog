import Head from "next/head";
import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { MenuContext } from "providers/providers.menu";
import { ShortArticle } from "components/templates/section/component.section.index";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

import { RootState } from "store/store.index";
import { useSelector, useDispatch } from "react-redux";
import { addTag } from "store/slice/tag/store.slice.tag";
import { addContentAllHome } from "store/slice/content/store.slice.content";

const Home: NextPage = ({ tag, content }: any) => {
  const dispatch = useDispatch();
  const { setModeMenu } = useContext(MenuContext);
  const story = useSelector((state: RootState) => state);

  useEffect(() => setModeMenu("display"), [setModeMenu]);
  useEffect(() => {
    !story.tag.all.home.data.length && dispatch(addTag({ all: tag }));
    !story.content.all.home.data.length && dispatch(addContentAllHome(content));
  }, [dispatch, content, tag, story]);

  if (content?.err || tag?.err) return <>Mamy problem z wczytaniem tego widoku spróbuj za 1h</>;
  console.log(content.all.meta.pagination.total);
  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            title="Sortuj"
            data={[
              { slug: "/", title: "Wszystko", quantity: content.all.meta.pagination.total },
              { slug: "/a", title: "Artykuły", quantity: content.article.meta.pagination.total },
              { slug: "/v", title: "Video", quantity: content.video.meta.pagination.total },
            ]}
          />
          <Col xs={12} md={9} xl={8}>
            {/* <ShortArticle data={aticles.data} type="article" /> */}
          </Col>
          {/* <MenuTable data={videos.data} title="video" type="video" /> */}
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
  const contentResponse = await fetch(`https://www.polski.dev/api/content/1`);
  const content = await contentResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tag,
      content,
    },
  };
}

export default Home;
