import Head from "next/head";
import { NextPage } from "next";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { ComponentMenuUserStats } from "components/templates/menu/index";
import { UserInfo } from "components/templates/user/component.user.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
// import { SectionArticleShortList } from "components/templates/section/index";
import { userGetListPreview, UserGetListType, userByIdGetPreview, UserByIdType, ContentShortFromUserType, contentShortFromUserGetPreview } from "utils/database/database.graphQL.index";
import { usersFindBackEnd, UsersFindType, userFindOneBackEnd, UserFindOneType } from "utils/query/user/find";
import { UserType } from "types/database/types.database.user";
import { userCountState, userCountFrontEnd } from "utils/query/user/count";
import { useState, useEffect } from "react";

const UserPage: NextPage<any> = ({ user }: { user: UserFindOneType }): JSX.Element => {
  const [stats, setStats] = useState(userCountState);

  useEffect(() => {
    (async () => {
      user?.data?.id && setStats(await userCountFrontEnd({ id: user.data.id }));
    })();
  }, [user]);

  return (
    <>
      <Head>
        <title>{user?.data?.attributes?.username || "Add name user"} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <div style={{ width: "100%", height: "10rem", backgroundColor: "#5F6367" }}></div>
      <Container>
        <Row>
          <ComponentMenuUserStats data={{ stats, skilks: user?.data?.attributes.skilks, learn: user?.data?.attributes.learn }} />
          <Col xs={12} md={9}>
            <>ij</>
            {/* <UserInfo data={{ user, slug }} /> */}
            {/* <SectionArticleShortList data={content} userId={(user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0} type="allFromUser" /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticPaths(): Promise<any> {
  const count: UsersFindType = await usersFindBackEnd({});

  const allUsers: any[] = await Promise.all(
    new Array(count.meta?.pagination?.pageCount || 1).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const posts: UsersFindType = await usersFindBackEnd({ page: i + 1 });
      return posts.data;
    })
  );

  return {
    paths: [].concat.apply([], allUsers).map((user: any) => `/user/${user?.id}/${slugFromTitle(`${user?.username}`)}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }: any): Promise<any> {
  const user: UserFindOneType = await userFindOneBackEnd({ id: parseInt(params.user[0]) });

  // content
  //const content: ContentShortFromUserType = await contentShortFromUserGetPreview(0, params.user[0]);

  return {
    props: {
      user,
      slug: `/${params.user[0]}/${params.user[1]}`,
    },
  };
}

export default UserPage;
