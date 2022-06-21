import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { MenuRaitings } from "components/templates/menu/";
import { PostType } from "types/database/types.database.post";
import { SectionPostFull } from "components/templates/section/index";
import { postsCountFrontEnd, postCountState } from "utils/query/posts/count";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { postsFindBackEnd, PostsFindType, postFindOneBackEnd, PostFindOneType } from "utils/query/posts/find";

const Post: NextPage<any> = ({ post }: { post?: PostFindOneType }): JSX.Element => {
  const [stats, setStats] = useState(postCountState);

  useEffect(() => {
    (async () => {
      post?.data?.id && setStats(await postsCountFrontEnd(post.data.id));
    })();
  }, [post]);

  return (
    <>
      <Head>
        <title>{post?.data?.attributes?.title || "Dodaj tytuł"} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuRaitings data={{ post, stats }} />
          <Col xs={12} md={9}>
            <SectionPostFull data={{ post, stats }} />
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
  // post full
  const post: PostFindOneType = await postFindOneBackEnd({ postId: params.post[0] });

  return {
    props: {
      post,
      slug: `/${params.post[0]}/${params.post[1]}`,
    },
  };
}

export default Post;
