import Head from "next/head";
import { NextPage } from "next";
import { SectionSingUp } from "components/templates/section/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { UsersCountType, userCountBackEnd } from "utils/query/users/count";
const SingUp: NextPage<any, any> = ({ countUser }: { countUser?: CountUserType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Rejstracja | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12}>{/* <SectionSingUp users={countUser?.data?.user?.meta?.pagination?.total} /> */}</Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // cont user
  const countUser: UserCountType = await userCountBackEnd();

  return {
    props: {
      countUser,
    },
  };
}

export default SingUp;
