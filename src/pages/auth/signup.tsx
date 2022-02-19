import Head from "next/head";
import { NextPage } from "next";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { SectionSingUp } from "components/templates/section/component.section.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Login: NextPage = ({ tag, quantityUsers }: any) => {
  useDispatchTagToStore().updateTagHome(tag);

  return (
    <>
      <Head>
        <title>Rejstracja | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary title="Filtruj" data={[]} />
          <Col xs={12} md={9}>
            <SectionSingUp users={quantityUsers.count} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

// {
// 	"data": null,
// 	"error": {
// 		"status": 400,
// 		"name": "ApplicationError",
// 		"message": "Email is already taken",
// 		"details": {}
// 	}
// }

// {
// 	"data": null,
// 	"error": {
// 		"status": 400,
// 		"name": "ApplicationError",
// 		"message": "An error occurred during account creation",
// 		"details": {}
// 	}
// }

export async function getStaticProps() {
  // tag
  const tagResponse = await fetch(`https://www.polski.dev/api/tag/1`);
  const tag = await tagResponse.json().catch((err) => ({ err: true }));

  // users quantity
  const quantityUsersResponse = await fetch(`https://www.polski.dev/api/count/user/all`);
  const quantityUsers = await quantityUsersResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tag,
      quantityUsers,
    },
  };
}

export default Login;