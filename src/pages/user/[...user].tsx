import Head from "next/head";
import { NextPage } from "next";
import { kebabCase, deburr, parseInt } from "lodash";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { MenuUser } from "components/templates/menu/index";
import { UserInfo } from "components/templates/user/component.user.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
// import { SectionArticleShortList } from "components/templates/section/index";
import { userGetListPreview, UserGetListType, userByIdGetPreview, UserByIdType, ContentShortFromUserType, contentShortFromUserGetPreview } from "utils/database/database.graphQL.index";
import { usersFindBackEnd, UsersFindType, userFindOneBackEnd, UserFindOneType } from "utils/query/user/find";
import { UserType } from "types/database/types.database.user";

const UserPage: NextPage<any> = ({ user, content, slug }: { user: UserByIdType; content: ContentShortFromUserType; slug: string }): JSX.Element => {
  return (
    <>
      <Head>
        <title>{!!user?.data?.user?.data?.attributes?.username && user?.data?.user?.data?.attributes?.username} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <div style={{ width: "100%", height: "10rem", backgroundColor: "#5F6367" }}></div>
      <Container>
        <Row>
          {/* <MenuUser data={{ id: (user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0, learn: user?.data?.user?.data?.attributes?.learn || { data: [] }, skilks: user?.data?.user?.data?.attributes?.skilks || { data: [] } }} /> */}
          <Col xs={12} md={9}>
            {/* <UserInfo data={{ user, slug }} /> */}
            {/* <SectionArticleShortList data={content} userId={(user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0} type="allFromUser" /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  const user: UserFindOneType = await userFindOneBackEnd({ id: parseInt(params.user[0]) });

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
      slug: `/user/${params.user[0]}/${params.user[1]}`,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const count: UsersFindType = await usersFindBackEnd({ page: 1 });

  const allUser: any[] = await Promise.all(
    new Array(count?.meta?.pagination?.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const users: UsersFindType = await usersFindBackEnd({ page: i });
      return users?.data;
    })
  );

  return {
    paths: [].concat.apply([], allUser).map((user: UserType) => `/user/${user?.id}/${slugFromTitle(user?.attributes.username)}`),
    fallback: true,
  };
}

export default UserPage;
