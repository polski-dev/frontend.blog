import Head from "next/head";
import { NextPage } from "next";
import { MenuPrimary } from "components/templates/menu";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { PostsFindType, postsFindBackEnd } from "utils/query/posts/find";
import { PostsCountType, postsCountBackEnd } from "utils/query/posts/count";
import { SectionContentShortList } from "components/templates/section/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Home: NextPage<any, {}> = ({ countPosts, content }: { countPosts?: PostsCountType; content?: PostsFindType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog dla programistów od programistów | POLSKI.DEV 👩‍💻👨‍💻</title>
        <meta name="Description" content="polski.dev to coś więcej niż blog dla programistów to miejsce spotkań dla programistów to ich autorskie pamiętniki" />
        <meta property="og:title" content="Blog dla programistów od programistów | POLSKI.DEV 👩‍💻👨‍💻" />
        <meta property="og:type" content="text/html" />
        <meta property="og:description" content="polski.dev to coś więcej niż blog dla programistów to miejsce spotkań dla programistów to ich autorskie pamiętniki" />
        <meta property="og:url" content={`https://www.polski.dev`} />
        <meta property="og:image" content="./../assets/img/shareSocialMedia.png" />
      </Head>
      <Container>
        <Row>
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
          <Col xs={12} md={6}>
            <SectionContentShortList data={{ typ: ContentEnum.post, content, title: "Wszystko" }} />
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
