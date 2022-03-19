import Head from "next/head";
import { NextPage } from "next";
import { kebabCase, deburr } from "lodash";
import { MenuGrade } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { SectionVideoFull } from "components/templates/section/component.section.index";
import { userByIdGetPreview, UserByIdType } from "database/database.graphQL.index";

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
  const user: UserByIdType = await userByIdGetPreview(parseInt(params.user[0]));

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
  const countPage: UserByIdType = await userByIdGetPreview(0);

  const allVideo: any[] = await Promise.all(
    new Array(countPage?.data?.video?.meta?.pagination?.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const videoWithOnlyTitle: VideoWithOnlyTitleType = await videoWithOnlyTitleGetPreview(i);
      return videoWithOnlyTitle?.data?.video?.data;
    })
  );

  return {
    paths: [].concat.apply([], allVideo).map((item: any) => `/v/${item.id}/${kebabCase(deburr(item.attributes.title.toLowerCase()))}`),
    fallback: true,
  };
}

export default UserPage;
