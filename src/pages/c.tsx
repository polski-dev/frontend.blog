import Head from "next/head";
import type { NextPage } from "next";
import { MenuPrimary, MenuTable } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Contact: NextPage = ({ tags, aticles }: any) => {
  return (
    <>
      <Head>
        <title>Kontakt | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary tags={tags.data} />
          <Col xs={12} md={9} xl={8}>
            <h5 style={{ marginTop: "3rem", paddingBottom: "1.5rem" }}>Kontakt</h5>
            <div style={{ padding: "3rem 1.5rem", background: "#2D2E30", borderRadius: "0.6rem", display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", marginBottom: "3rem" }}>
              <div style={{ maxWidth: "50rem" }}>
                <p style={{ fontSize: "2rem", display: "block", width: "100%", textAlign: "center" }}>
                  Społeczność <b>POLSKI.DEV</b> chciałaby dowiedzieć się o Twoich sugestiach lub problemach!
                </p>
                <p style={{ fontSize: "2rem", display: "block", width: "100%", textAlign: "center", paddingTop: "2rem" }}>Email: hello@uxu.pl 😁</p>
              </div>
            </div>
          </Col>
          <MenuTable data={aticles.data} title="blog" type="article" />
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // top tags
  const tagsResponse = await fetch(`https://www.polski.dev/api/tags/1`);
  const tags = await tagsResponse.json().catch((err) => ({ err: true }));

  // aticle new
  const aticlesResponse = await fetch(`https://www.polski.dev/api/articles/1`);
  const aticles = await aticlesResponse.json().catch((err) => ({ err: true }));

  return {
    props: {
      tags,
      aticles,
    },
  };
}

export default Contact;
