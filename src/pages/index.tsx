import Head from "next/head";
import { NextPage } from "next";
//import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { contentGetPreview, ContentType } from "database/database.restAPI.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ListShortArticle } from "components/templates/section/component.section.index";

const Home: NextPage<any, ContentType> = ({ tag, content }: { tag: any; content: ContentType }) => {
  // useDispatchTagToStore().updateTagHome(tag);

  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          {/* <MenuPrimary
            title="Filtruj"
            data={[
              { slug: "/", title: "Wszystko", quantity: content.all?.meta.pagination.total || 0 },
              { slug: "/a", title: "Artykuły", quantity: content.article.meta.pagination.total },
              { slug: "/v", title: "Video", quantity: content.video.meta.pagination.total },
            ]}
          /> */}
          <Col xs={12} md={9}>
            {/* <ListShortArticle data={content} type="all" /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // // tag
  // const tagResponse = await fetch(`https://www.polski.dev/api/tag/1`);
  // const tag = await tagResponse.json();

  // content
  const content: ContentType = await contentGetPreview(0, false);

  // console.log(content);

  return {
    props: {
      tag: {},
      content: {},
    },
  };
}

export default Home;
