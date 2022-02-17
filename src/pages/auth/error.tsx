import Head from "next/head";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { SectionLogin } from "components/templates/section/component.section.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Login: NextPage = ({ tag, content, quantityUsers }: any) => {
  useDispatchTagToStore().updateTagHome(tag);
  const { data } = useSession();
  console.log(data);
  return (
    <>
      <Head>
        <title>Logowanie | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            title="Filtruj"
            data={[
              { slug: "/", title: "Wszystko", quantity: content.all.meta.pagination.total },
              { slug: "/a", title: "Artykuły", quantity: content.article.meta.pagination.total },
              { slug: "/v", title: "Video", quantity: content.video.meta.pagination.total },
            ]}
          />
          <Col xs={12} md={9}>
            <SectionLogin users={quantityUsers.count} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // tag
  const tagResponse = await fetch(`https://www.polski.dev/api/tag/1`);
  const tag = await tagResponse.json().catch((err) => ({ err: true }));

  // content
  const contentResponse = await fetch(`https://www.polski.dev/api/content/1`);
  const content = await contentResponse.json().catch((err) => ({ err: true }));

  // users quantity
  const quantityUsersResponse = await fetch(`https://www.polski.dev/api/count/user/all`);
  const quantityUsers = await quantityUsersResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tag,
      content,
      quantityUsers,
    },
  };
}

export default Login;