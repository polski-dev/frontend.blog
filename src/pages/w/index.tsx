import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ListShortArticle } from "components/templates/section/component.section.index";
import { contentShortGetPreview, ContentShortType, tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType } from "database/database.graphQL.index";

const Waitingroom: NextPage<any, ContentShortType> = ({ tag, content }: { tag: TagWithOnlyTitleType; content: ContentShortType }): JSX.Element => {
  const { updateTagHome, store } = useDispatchTagToStore();
  useEffect(() => {
    if (!store.tag.home.data.length) updateTagHome(tag);
  }, [store, updateTagHome, tag]);

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
              { slug: "/w", title: "Wszystko", quantity: content.all?.meta.pagination.total || 0 },
              { slug: "/w/a", title: "Artykuły", quantity: content.article.meta.pagination.total },
              { slug: "/w/v", title: "Video", quantity: content.video.meta.pagination.total },
            ]}
          />
          <Col xs={12} md={9}>
            <ListShortArticle data={content} type="allWaitingRoom" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // tag
  const tag: TagWithOnlyTitleType = await tagWithOnlyTitleAllGetPreviewList(0);

  // content
  const content: ContentShortType = await contentShortGetPreview(0, true);

  return {
    props: {
      tag,
      content,
    },
  };
}

export default Waitingroom;
