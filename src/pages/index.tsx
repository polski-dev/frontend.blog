import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionArticleShortList } from "components/templates/section/component.section.index";
import { contentShortGetPreview, ContentShortType, tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType } from "utils/database/database.graphQL.index";

const Home: NextPage<any, {}> = ({ content }: { content: ContentShortType }): JSX.Element => {
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
              { slug: "/", title: "Wszystko", quantity: content.data.all?.meta.pagination.total || 0 },
              { slug: "/a", title: "Artykuły", quantity: content.data.article?.meta.pagination.total || 0 },
              { slug: "/v", title: "Video", quantity: content.data.video?.meta.pagination.total || 0 },
            ]}
          />
          <Col xs={12} md={9}>
            <SectionArticleShortList data={content} type="all" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // content
  const content: ContentShortType = await contentShortGetPreview(0, false);

  return {
    props: {
      content,
    },
  };
}

export default Home;
