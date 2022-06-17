import Head from "next/head";
import { NextPage } from "next";
import { PostsFindType, postsFindBackEnd } from "utils/requests/posts/find";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { PostsCountType, postsCountBackEnd } from "utils/requests/posts/count";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionContentShortList } from "components/templates/section/component.section.index";

const Home: NextPage<any, {}> = ({ countPosts, content }: { countPosts: PostsCountType; content: PostsFindType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
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
            <SectionContentShortList data={{ content, title: "Wszystko" }} />
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
  const content: PostsFindType = await postsFindBackEnd({ published: true });

  return {
    props: {
      countPosts,
      content,
    },
  };
}

export default Home;
