import Head from "next/head";
import { NextPage } from "next";
import { SectionSingUp } from "components/templates/section/index";
import { usersCountBackEnd, UsersCountType } from "utils/query/users/count";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const SingUp: NextPage<any, any> = ({ countUser }: { countUser?: UsersCountType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Rejstracja | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionSingUp users={countUser?.data?.count} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // cont user
  const countUser: UsersCountType = await usersCountBackEnd();

  return {
    props: {
      countUser,
    },
  };
}

export default SingUp;
