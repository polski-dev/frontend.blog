import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { SectionSingUp } from "components/templates/section/component.section.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { countUserGetPreview, CountUserType } from "utils/database/database.graphQL.index";

const SingUp: NextPage<any, any> = ({ countUser }: { countUser: CountUserType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Rejstracja | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionSingUp users={countUser?.data?.user?.meta?.pagination?.total} />
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

export default SingUp;
