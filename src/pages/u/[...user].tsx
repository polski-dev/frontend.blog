import Head from "next/head";
import { NextPage } from "next";
import { kebabCase, deburr, parseInt } from "lodash";
import { MenuUser } from "components/templates/menu/component.menu.index";
import { UserInfo } from "components/templates/user/component.user.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionArticleShortList } from "components/templates/section/index";
import { userGetListPreview, UserGetListType, userByIdGetPreview, UserByIdType, ContentShortFromUserType, contentShortFromUserGetPreview } from "utils/database/database.graphQL.index";

const UserPage: NextPage<any> = ({ user, content, slug }: { user: UserByIdType; content: ContentShortFromUserType; slug: string }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{!!user?.data?.user?.data?.attributes?.username && user?.data?.user?.data?.attributes?.username} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <div style={{ width: "100%", height: "10rem", backgroundColor: "#5F6367" }}></div>
      <Container>
        <Row>
          <MenuUser data={{ id: (user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0, learn: user?.data?.user?.data?.attributes?.learn || { data: [] }, skilks: user?.data?.user?.data?.attributes?.skilks || { data: [] } }} />
          <Col xs={12} md={9}>
            <UserInfo data={{ user, slug }} />
            <SectionArticleShortList data={content} userId={(user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0} type="allFromUser" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  // article full
  const user: UserByIdType = await userByIdGetPreview(parseInt(params.user[0]));

  // content
  const content: ContentShortFromUserType = await contentShortFromUserGetPreview(0, params.user[0]);

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      content,
      slug: `/u/${params.user[0]}/${params.user[1]}`,
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
      }) => `/u/${user?.id}/${kebabCase(deburr(user?.attributes?.username.toLowerCase()))}`
    ),
    fallback: true,
  };
}

export default UserPage;
