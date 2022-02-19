import Head from "next/head";
import { NextPage } from "next";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { SectionSingIn } from "components/templates/section/component.section.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Login: NextPage = ({ tag, quantityUsers }: any) => {
  useDispatchTagToStore().updateTagHome(tag);

  return (
    <>
      <Head>
        <title>Logowanie | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary title="Filtruj" data={[]} />
          <Col xs={12} md={9}>
            <SectionSingIn users={quantityUsers.count} />
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

  // content
  const contentResponse = await fetch(`https://www.polski.dev/api/content/1`);
  const content = await contentResponse.json().catch(() => ({ err: true }));

  // users quantity
  const quantityUsersResponse = await fetch(`https://www.polski.dev/api/count/user/all`);
  const quantityUsers = await quantityUsersResponse.json().catch(() => ({ err: true }));

  return {
    props: {
      tag,
      content,
      quantityUsers,
    },
  };
}

export default Login;
