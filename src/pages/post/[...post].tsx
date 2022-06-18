import Head from "next/head";
import { NextPage } from "next";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { SectionArticleFull } from "components/templates/section/index";
import { postsFindBackEnd, PostsFindType } from "utils/query/posts/find";
import { MenuGrade } from "components/templates/menu/component.menu.index";
import { PostType, PostFullType } from "types/database/types.database.post";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const Post: NextPage<any> = ({ post }: { post: PostFullType }): JSX.Element => {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.data.attributes?.title || "Dodaj tytuł"} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          {/* <MenuGrade slug={slug} type="article" comments={comments.meta?.pagination.total || 0} views={article.data.article.data.attributes.views} id={parseInt(article?.data?.article?.data?.id)} gradeStats={article?.data?.article?.data?.attributes?.grades} /> */}
          <Col xs={12} md={9}>
            {/* <SectionArticleFull data={{ article, comments }}  /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticPaths(): Promise<any> {
  const posts: PostsFindType = await postsFindBackEnd({});

  const allPosts: any[] = await Promise.all(
    new Array(posts.meta?.pagination?.pageCount || 1).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const posts: PostsFindType = await postsFindBackEnd({ page: i + 1 });
      return posts.data;
    })
  );

  return {
    paths: [].concat.apply([], allPosts).map((post: PostType) => `/post/${post.id}/${slugFromTitle(post.attributes.title)}`),
    fallback: true,
  };
}

export async function getStaticProps({ params }: any): Promise<any> {
  console.log(params);
  // post full
  const post: PostFullType = await postsFindBackEnd({ id: params.post[0] });

  return {
    props: {
      post,
      slug: `/${params.post[0]}/${params.post[1]}`,
    },
  };
}

export default Post;
