import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { MenuRaitings } from "components/templates/menu/";
import { PostType } from "types/database/types.database.post";
import { SectionPostFull } from "components/templates/section";
import { postCountFrontEnd, postCountState } from "utils/query/posts/count";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { postsFindBackEnd, PostsFindType, postFindOneBackEnd, PostFindOneType } from "utils/query/posts/find";

const Post: NextPage<any> = ({ post, slug }: { post?: PostFindOneType; slug: string }): JSX.Element => {
  const [stats, setStats] = useState(postCountState);

  useEffect(() => {
    (async () => {
      post?.data?.id && setStats(await postCountFrontEnd(post.data.id));
    })();
  }, [post]);

  const schemaData = `
  {
    “@context”: “http://schema.org”,
    “@type”: “BlogPosting”,
    “mainEntityOfPage”:{
    “@type”:”WebPage”,
    “@id”:”https://www.polski.dev/${slug}”
    },
    “headline”: “${post?.data?.attributes.title}”,
    “image”: {
    “@type”: “ImageObject”,
    “url”: “${post?.data?.attributes.cover?.data?.attributes.url}”,
    “height”: ${post?.data?.attributes.cover?.data?.attributes.height},
    “width”: ${post?.data?.attributes.cover?.data?.attributes.width}
    },
    “datePublished”: "${post?.data?.attributes.createdAt}",
    “dateModified”: "${post?.data?.attributes.updatedAt}",
    “author”: {
    “@type”: “Person”,
    “name”: “${post?.data?.attributes.author?.data?.attributes.username}”
    },
    “publisher”: {
    “@type”: “Organization”,
    “name”: “${post?.data?.attributes.author?.data?.attributes.username}”,
    “logo”: {
    “@type”: “ImageObject”,
    “url”: “${post?.data?.attributes.author?.data?.attributes.avatar?.data?.attributes.formats.thumbnail?.url}”,
    “width”: ${post?.data?.attributes.author?.data?.attributes.avatar?.data?.attributes.formats.thumbnail?.width},
    “height”: ${post?.data?.attributes.author?.data?.attributes.avatar?.data?.attributes.formats.thumbnail?.height}
    }
    },
    “description”: "${post?.data?.attributes?.content.slice(0, 160)}",
    “articleBody”: "${post?.data?.attributes?.content}"
    }
  `;

  return (
    <>
      <Head>
        <title>{post?.data?.attributes?.title || "Dodaj tytuł"} | POLSKI.DEV 👩‍💻👨‍💻</title>
        {post?.data?.attributes?.content && <meta name="Description" content={post?.data?.attributes?.content.slice(0, 160)} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
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
    paths: [].concat.apply([], allPosts).map((post?: PostType) => `/post/${post?.id}/${slugFromTitle(post?.attributes?.title || "")}`),
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
