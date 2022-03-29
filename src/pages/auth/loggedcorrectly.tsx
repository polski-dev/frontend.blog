import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionSessionInfo } from "components/templates/section/component.section.index";
import { tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType, countUserGetPreview, CountUserType } from "database/database.graphQL.index";

const Loggedcorrectly: NextPage<any, TagWithOnlyTitleType> = ({ countUser }: { countUser: CountUserType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Witaj | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary title="Filtruj" data={[]} />
          <Col xs={12} md={9}>
            <SectionSessionInfo users={countUser.data.user.meta.pagination.total} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // cont user
  const countUser: CountUserType = await countUserGetPreview();

  return {
    props: {
      countUser,
    },
  };
}

export default Loggedcorrectly;
