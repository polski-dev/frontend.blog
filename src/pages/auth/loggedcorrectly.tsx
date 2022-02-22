import Head from "next/head";
import { NextPage } from "next";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionSessionInfo } from "components/templates/section/component.section.index";
import { tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType } from "database/database.graphQL.index";

const Loggedcorrectly: NextPage<any, TagWithOnlyTitleType> = ({ tag, quantityUsers }: { tag: TagWithOnlyTitleType; quantityUsers: any }): JSX.Element => {
  useDispatchTagToStore().updateTagHome(tag);

  return (
    <>
      <Head>
        <title>Witaj | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary title="Filtruj" data={[]} />
          <Col xs={12} md={9}>
            <SectionSessionInfo users={quantityUsers.count} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // tag
  const tag: TagWithOnlyTitleType = await tagWithOnlyTitleAllGetPreviewList(0);

  // users quantity
  const quantityUsersResponse = await fetch(`https://www.polski.dev/api/count/user/all`);
  const quantityUsers = await quantityUsersResponse.json().catch(() => ({ err: true }));

  return {
    props: {
      tag,
      quantityUsers,
    },
  };
}

export default Loggedcorrectly;
