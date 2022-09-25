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
        <title>Poczekalnia artykułów | POLSKI.DEV 👩‍💻👨‍💻</title>
        <meta name="Description" content="Lista artykułów w poczekalni" />
        <meta property="og:title" content="Poczekalnia | POLSKI.DEV 👩‍💻👨‍💻" />
        <meta property="og:type" content="text/html" />
        <meta property="og:description" content="Lista postów w poczekalni" />
        <meta property="og:url" content={`https://www.polski.dev/waiting`} />
        <meta property="og:image" content="./../assets/img/shareSocialMedia.png" />
      </Head>
      <Container>
        <Row>
          <Col xs={12} md={3}>
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
          </Col>
          <Col xs={12} md={9}>
            <SectionContentShortList data={{ typ: ContentEnum.unArticle, content, title: "Poczekalnia artykułów" }} />
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
  const content: PostsFindType = await postsFindBackEnd({ published: false, typ: ContentEnum.unArticle });

  return {
    props: {
      countPosts,
      content,
    },
  };
}

export default WaitingVideo;
