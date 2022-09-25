import Head from "next/head";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import { MenuPrimary } from "components/templates/menu";
import useAddCallBackURL from "hooks/hooks.useCallBackURL";
import { SectionDasbordUserAddArticle } from "components/templates/section/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const UserPanelPage: NextPage<any> = (): JSX.Element => {
  const { status } = useSession();
  const router: NextRouter = useRouter();
  const { addCallBackURL } = useAddCallBackURL();

  useEffect(() => {
    if (status === "unauthenticated") {
      addCallBackURL({ to: "/dashboard/add/post", name: "dasbordAddArticle" });
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
            data={{
              title: "Panel użytkowania",
              links: [
                { slug: "/dashboard/add/post", title: "Dodaj post", count: 1 },
                { slug: "/dashboard/edit/profil", title: "Edytuj profil", count: 2 },
              ],
            }}
          />
          <Col xs={12} md={9}>
            <SectionDasbordUserAddArticle data={{ title: "Dodaj post" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserPanelPage;
