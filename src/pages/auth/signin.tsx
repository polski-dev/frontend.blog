import Head from "next/head";
import { NextPage } from "next";
import { SectionSingIn } from "components/templates/section/component.section.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { TagWithOnlyTitleType, countUserGetPreview, CountUserType } from "database/database.graphQL.index";

const SingIn: NextPage<any, TagWithOnlyTitleType> = ({ countUser }: { countUser: CountUserType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Logowanie | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12}>
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
