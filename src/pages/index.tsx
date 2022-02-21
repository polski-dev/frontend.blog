import Head from "next/head";
import { NextPage } from "next";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ListShortArticle } from "components/templates/section/component.section.index";
import { contentGetPreview, ContentType, tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType } from "database/database.restAPI.index";

const Home: NextPage<any, ContentType> = ({ tag, content }: { tag: TagWithOnlyTitleType; content: ContentType }) => {
  useDispatchTagToStore().updateTagHome(tag);
  console.log(content);

  console.log(tag);
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
              { slug: "/", title: "Wszystko", quantity: content.all?.meta.pagination.total || 0 },
              { slug: "/a", title: "Artykuły", quantity: content.article.meta.pagination.total },
              { slug: "/v", title: "Video", quantity: content.video.meta.pagination.total },
            ]}
          />
          <Col xs={12} md={9}>
            <ListShortArticle data={content} type="all" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // tag
  const tag = await tagWithOnlyTitleAllGetPreviewList(0);

  // content
  const content: ContentType = await contentGetPreview(0, false);

  return {
    props: {
      tag,
      content,
    },
  };
}

export default Home;
