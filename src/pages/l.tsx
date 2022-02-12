import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionLogin } from "components/templates/section/component.section.index";

const Login: NextPage = ({ tag, content }: any) => {
  useDispatchTagToStore().updateTagHome(tag);

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
            <SectionLogin />
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

  return {
    props: {
      tag,
      content,
    },
  };
}

export default Login;
