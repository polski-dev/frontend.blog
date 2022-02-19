import Head from "next/head";
import { NextPage } from "next";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionSessionInfo } from "components/templates/section/component.section.index";

const Login: NextPage = ({ tag, quantityUsers }: any) => {
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

export async function getStaticProps() {
  // tag
  const tagResponse = await fetch(`https://www.polski.dev/api/tag/1`);
  const tag = await tagResponse.json().catch(() => ({ err: true }));

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

export default Login;
