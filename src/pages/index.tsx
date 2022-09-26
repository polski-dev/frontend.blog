import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { PostsFindType, postsFindBackEnd } from "utils/query/posts/find";
import { PostsCountType, postsCountBackEnd } from "utils/query/posts/count";
import { SectionContentShortList } from "components/templates/section/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { useEffect } from "react";

const Home: NextPage<any, {}> = ({ countPosts, content }: { countPosts?: PostsCountType; content?: PostsFindType }): JSX.Element => {
  useEffect(() => {
    console.log(window.matchMedia("(max-width: 600px)").matches);
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: "/", title: "Wszystko", count: countPosts?.data?.publishedAll || 0 },
                { slug: "/article", title: "Artykuły", count: countPosts?.data?.publishedAllArticle || 0 },
                { slug: "/video", title: "Video", count: countPosts?.data?.publishedAllVideo || 0 },
              ],
            }}
          />
        </Col>
        <Col xs={12} md={9}>
          <SectionContentShortList data={{ typ: ContentEnum.post, content, title: "Wszystko" }} />
        </Col>
      </Row>
    </Container>
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
