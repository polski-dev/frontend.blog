import Head from "next/head";
import { NextPage } from "next";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { PostsFindType, postsFindBackEnd } from "utils/query/posts/find";
import { PostsCountType, postsCountBackEnd } from "utils/query/posts/count";
import { MenuPrimary } from "components/templates/menu";
import { SectionContentShortList } from "components/templates/section/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const WaitingVideo: NextPage<any, {}> = ({ countPosts, content }: { countPosts: PostsCountType; content: PostsFindType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Poczekalnia video | POLSKI.DEV 👩‍💻👨‍💻</title>
        <meta name="Description" content="Lista artykułów zawierajacych video w poczekalni" />
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: "/waiting", title: "Wszystko", count: countPosts.data?.unPublishedAll || 0 },
                { slug: "/waiting/article", title: "Artykuły", count: countPosts.data?.unPublishedAllArticle || 0 },
                { slug: "/waiting/video", title: "Video", count: countPosts.data?.unPublishedAllVideo || 0 },
              ],
            }}
          />
          <Col xs={12} md={9}>
            <SectionContentShortList data={{ typ: ContentEnum.unVideo, content, title: "Poczekalnia video" }} />
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
  const content: PostsFindType = await postsFindBackEnd({ published: false, typ: ContentEnum.unVideo });

  return {
    props: {
      countPosts,
      content,
    },
  };
}

export default WaitingVideo;
