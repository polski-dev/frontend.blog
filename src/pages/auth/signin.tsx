import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { SectionSingIn } from "components/templates/section/component.section.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType, countUserGetPreview, CountUserType } from "database/database.graphQL.index";

const SingIn: NextPage<any, TagWithOnlyTitleType> = ({ tag, countUser }: { tag: TagWithOnlyTitleType; countUser: CountUserType }): JSX.Element => {
  const { updateTagHome, store } = useDispatchTagToStore();
  useEffect(() => {
    if (!store.tag.home.data.length) updateTagHome(tag);
  }, [store, updateTagHome, tag]);

  return (
    <>
      <Head>
        <title>Logowanie | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary title="Filtruj" data={[]} />
          <Col xs={12} md={9}>
            <SectionSingIn users={countUser.user.meta.pagination.total} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // tag
  const tag: TagWithOnlyTitleType = await tagWithOnlyTitleAllGetPreviewList(0);

  // cont user
  const countUser: CountUserType = await countUserGetPreview();

  return {
    props: {
      tag,
      countUser,
    },
  };
}

export default SingIn;
