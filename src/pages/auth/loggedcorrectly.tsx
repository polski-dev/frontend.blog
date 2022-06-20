import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionSessionInfo } from "components/templates/section/index";
import { TagWithOnlyTitleType, countUserGetPreview, CountUserType } from "utils/database/database.graphQL.index";

const Loggedcorrectly: NextPage<any, TagWithOnlyTitleType> = ({ countUser }: { countUser: CountUserType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Witaj | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionSessionInfo users={countUser?.data?.user?.meta?.pagination?.total} />
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
