import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import { MenuPrimary } from "components/templates/menu";
import useAddCallBackURL from "hooks/hooks.useCallBackURL";
import { SectionDasbordUserEditData } from "components/templates/section/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const UserPanelPage: NextPage<any> = (): JSX.Element => {
  const { status } = useSession();
  const router: NextRouter = useRouter();
  const { addCallBackURL } = useAddCallBackURL();

  useEffect(() => {
    if (status === "unauthenticated") {
      addCallBackURL({ to: "/dashboard/edit/profil", name: "dasbordEdit" });
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
          <Col xs={12} md={3}>
            <MenuPrimary
              data={{
                title: "Panel użytkowania",
                links: [
                  { slug: "/dashboard/add/post", title: "Dodaj post", count: 1 },
                  { slug: "/dashboard/edit/profil", title: "Edytuj profil", count: 2 },
                ],
              }}
            />
          </Col>
          <Col xs={12} md={9}>
            <SectionDasbordUserEditData />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPanelPage;
