import Head from "next/head";
import { NextPage } from "next";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { PostsFindType, postsFindBackEnd } from "utils/query/posts/find";
import { PostsCountType, postsCountBackEnd } from "utils/query/posts/count";
import { MenuPrimary } from "components/templates/menu/index";
import { SectionContentShortList } from "components/templates/section/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";

const Home: NextPage<any, {}> = ({ countPosts, content }: { countPosts: PostsCountType; content: PostsFindType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Video | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: "/", title: "Wszystko", count: countPosts.data?.publishedAll || 0 },
                { slug: "/article", title: "Artykuły", count: countPosts.data?.publishedAllArticle || 0 },
                { slug: "/video", title: "Video", count: countPosts.data?.publishedAllVideo || 0 },
              ],
            }}
          />
          <Col xs={12} md={9}>
            <SectionContentShortList data={{ typ: ContentEnum.video, content, title: "Video" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps(): Promise<any> {
  // count posts
  const countPosts: PostsCountType = await postsCountBackEnd();
  // content
  const content: PostsFindType = await postsFindBackEnd({ published: true, typ: ContentEnum.video });

  return {
    props: {
      countPosts,
      content,
    },
  };
}

export default Home;
