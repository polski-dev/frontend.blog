import Head from "next/head";
import { NextPage } from "next";
import useDispatchTagToStore from "hooks/hooks.dispatchTagToStore";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Contact: NextPage = ({ tag }: any) => {
  useDispatchTagToStore().updateTagHome(tag);

  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary title="Filtruj" data={[]} />
          <Col xs={12} md={9}>
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
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // tag
  const tagResponse = await fetch(`https://www.polski.dev/api/tag/1`);
  const tag = await tagResponse.json().catch(() => ({ err: true }));

  return {
    props: {
      tag,
    },
  };
}

export default Contact;
