import Head from "next/head";
import { NextPage } from "next";
import { kebabCase, deburr } from "lodash";
import { MenuGrade } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionVideoFull } from "components/templates/section/component.section.index";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { userGetListPreview, UserGetListType, userByIdGetPreview, UserByIdType } from "database/database.graphQL.index";

const UserPage: NextPage<any> = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>

      <Container>
        <Row>
          ok
          <Col xs={12} md={9}>
            ok
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  // article full
  const user: UserGetListType = await userGetListPreview(parseInt(params.user[0]));

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      slug: `/${params.user[0]}/${params.user[1]}`,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const countPage: UserGetListType = await userGetListPreview(0);

  const allUser: any[] = await Promise.all(
    new Array(countPage?.data?.usersPermissionsUsers?.meta?.pagination?.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const users: UserGetListType = await userGetListPreview(i);

      return users?.data?.usersPermissionsUsers?.data;
    })
  );

  return {
    paths: [].concat.apply([], allUser).map(
      (user: {
        id: string;
        attributes: {
          username: string;
        };
      }) => `/u/${user.id}/${kebabCase(deburr(user.attributes.username.toLowerCase()))}`
    ),
    fallback: true,
  };
}

export default UserPage;
