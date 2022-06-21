import Head from "next/head";
import { NextPage } from "next";
import useViews from "hooks/hooks.useViews";
import { useState, useEffect } from "react";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";

import { ContentEnum } from "types/database/types.database.contentEnum";
import { ComponentMenuUserStats } from "components/templates/menu/index";
import { PostsFindType, postsFindBackEnd } from "utils/query/posts/find";
import { userCountState, userCountFrontEnd } from "utils/query/user/count";
import { SectionUserInfo, SectionContentShortList } from "components/templates/section/index";
import { usersFindBackEnd, UsersFindType, userFindOneBackEnd, UserFindOneType } from "utils/query/user/find";

const UserPage: NextPage<any> = ({ user, content }: { user?: UserFindOneType; content: PostsFindType }): JSX.Element => {
  useViews({ id: user?.data?.id, typ: ContentEnum.user });
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
            <SectionUserInfo data={{ user }} />
            <SectionContentShortList data={{ typ: ContentEnum.userPost, content, title: `Posty ${user?.data?.attributes.username}`, id: user?.data?.id }} />
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
  const content: PostsFindType = await postsFindBackEnd({ published: true, typ: ContentEnum.userPost, id: user.data?.id });

  return {
    props: {
      user,
      content,
      slug: `/${params.user[0]}/${params.user[1]}`,
    },
  };
}

export default UserPage;
