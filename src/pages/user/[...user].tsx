import Head from "next/head";
import { NextPage } from "next";
import useViews from "hooks/hooks.useViews";
import { useState, useEffect } from "react";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { UserType } from "types/database/types.database.user";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { MenuUserStats } from "components/templates/menu/index";
import { PostsFindType, postsFindBackEnd } from "utils/query/posts/find";
import { userCountState, userCountFrontEnd } from "utils/query/users/count";
import { SectionUserInfo, SectionContentShortList } from "components/templates/section/index";
import { usersFindBackEnd, UsersFindType, userFindOneBackEnd, UserFindOneType } from "utils/query/users/find";

const UserPage: NextPage<any> = ({ user, content, slug }: { user?: UserFindOneType; content: PostsFindType; slug: string }): JSX.Element => {
  useViews({ id: user?.data?.id, typ: ContentEnum.user });
  const [stats, setStats] = useState(userCountState);

  useEffect(() => {
    (async () => {
      user?.data?.id && setStats(await userCountFrontEnd({ id: user.data.id }));
    })();
  }, [user]);

  const schemaData = `
  {
    "@context": "https://schema.org",
    "@type": "Person",
   ${user?.data?.attributes.avatar?.data?.attributes.url ? `"image": "${user?.data?.attributes.avatar?.data?.attributes.url}",` : ""} 
    "name": "${user?.data?.attributes.username}",
    "url": "https://www.polski.dev${slug}"
  }
  `;

  return (
    <>
      <Head>
        <title>{user?.data?.attributes?.username || "Add name user"} | POLSKI.DEV 👩‍💻👨‍💻</title>
        <meta property="og:title" content={`${user?.data?.attributes?.username} | POLSKI.DEV 👩‍💻👨‍💻`} />
        <meta property="og:type" content="text/html" />
        <meta property="og:description" content={`${user?.data?.attributes?.about}`} />
        <meta property="og:url" content={`https://www.polski.dev${slug}`} />
        <meta property="og:image" content={user?.data?.attributes.avatar?.data?.attributes.url} />
        {user?.data?.attributes?.about && <meta name="Description" content={user?.data?.attributes?.about.slice(0, 160)} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
      </Head>
      <div style={{ width: "100%", height: "10rem", backgroundColor: "#5F6367" }}></div>
      <Container>
        <Row>
          <MenuUserStats data={{ stats, skilks: user?.data?.attributes.skilks, learn: user?.data?.attributes.learn }} />
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
      const res: UsersFindType = await usersFindBackEnd({ page: i + 1 });
      return res.data;
    })
  );
  return {
    paths: [].concat.apply([], allUsers).map((user: UserType) => `/user/${user?.id}/${slugFromTitle(`${user?.attributes?.username}`)}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }: any): Promise<any> {
  const user: UserFindOneType = await userFindOneBackEnd({ id: parseInt(params.user[0]) });
  const content: PostsFindType = await postsFindBackEnd({ published: true, typ: ContentEnum.userPost, id: user?.data?.id });

  return {
    props: {
      user,
      content,
      slug: `/${params.user[0]}/${params.user[1]}`,
    },
  };
}

export default UserPage;
