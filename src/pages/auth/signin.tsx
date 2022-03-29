import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { SectionSingIn } from "components/templates/section/component.section.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType, countUserGetPreview, CountUserType } from "database/database.graphQL.index";

const SingIn: NextPage<any, TagWithOnlyTitleType> = ({ countUser }: { countUser: CountUserType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Logowanie | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary title="Filtruj" data={[]} />
          <Col xs={12} md={9}>
            <SectionSingIn users={countUser.data.user.meta.pagination.total} />
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

export default SingIn;
