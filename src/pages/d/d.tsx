import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import useAddCallBackURL from "hooks/hooks.useCallBackURL";
import { MenuPrimary } from "components/templates/menu";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionDasbordUserEditData } from "components/templates/section/index";

const UserPanelPage: NextPage<any> = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const { data: session, status } = useSession();
  const { addCallBackURL } = useAddCallBackURL();

  useEffect(() => {
    if (status === "unauthenticated") {
      addCallBackURL({ to: "/d/d", name: "dasbordEdit" });
      router.push("/auth/signin");
    }
  }, [status, router, addCallBackURL]);

  return (
    <>
      <Head>
        <title>Panel użytkownika | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            title="Panel użytkowania"
            data={[
              { slug: "/d", title: "Start", quantity: 1 },
              { slug: "/d/a", title: "Dodaj wpis", quantity: 2 },
              { slug: "/d/d", title: "Edycja danych", quantity: 3 },
            ]}
          />
          <Col xs={12} md={9}>
            <SectionDasbordUserEditData data={{ session }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPanelPage;
