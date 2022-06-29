import Head from "next/head";
import { NextPage } from "next";
import { SectionSingIn } from "components/templates/section/index";
import { usersCountBackEnd, UsersCountType } from "utils/query/users/count";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const SingIn: NextPage<any> = ({ countUser }: { countUser?: UsersCountType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Logowanie | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionSingIn users={countUser?.data?.count} />
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

export default SingIn;
