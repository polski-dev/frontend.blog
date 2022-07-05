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
import { TagType } from "types/database/types.database.tag";

const Post: NextPage<any> = ({ post, slug }: { post?: PostFindOneType; slug: string }): JSX.Element => {
  const [stats, setStats] = useState(postCountState);

  useEffect(() => {
    (async () => {
      post?.data?.id && setStats(await postCountFrontEnd(post.data.id));
    })();
  }, [post]);

  const padTo2Digits = (num: number): string => num.toString().padStart(2, "0");
  const formatDate = (date: Date): string => [date?.getFullYear(), padTo2Digits(date?.getMonth() + 1), padTo2Digits(date?.getDate())].join("-");

  const schemaData = `
  {
		"@context":"http://schema.org",
		"@type": "BlogPosting",
		"image": "${post?.data?.attributes.cover?.data?.attributes.url}",
		"url": "https://www.polski.dev${slug}",
		"headline": "${post?.data?.attributes.title}",
		"alternativeHeadline": "${post?.data?.attributes.title} | POLSKI.DEV",
    "dateCreated": "${post?.data?.attributes.createdAt && formatDate(new Date(post?.data?.attributes.createdAt))}",
		"inLanguage": "pl-PL",
		"isFamilyFriendly": "true",
		"copyrightYear": "${new Date().getFullYear()}",
		"copyrightHolder": "",

		"author": {
			"@type": "Person",
			"name": "${post?.data?.attributes.author?.data?.attributes.username}",
			"url": "https://www.polski.dev/user/${post?.data?.attributes.author?.data?.attributes.username ? slugFromTitle(post?.data?.attributes.author?.data?.attributes.username) : ""}"
		},
		"mainEntityOfPage": "True",
		"articleSection": "Uncategorized posts"
	}
  `;

  return (
    <>
      <Head>
        <title>{post?.data?.attributes?.title || "Dodaj tytuł"} | POLSKI.DEV 👩‍💻👨‍💻</title>
        {post?.data?.attributes?.content && <meta name="Description" content={post?.data?.attributes?.content.slice(0, 160)} />}

        <meta property="og:url" content={`https://www.polski.dev${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${post?.data?.attributes?.title || "Dodaj tytuł"} | POLSKI.DEV`} />
        <meta property="og:description" content={post?.data?.attributes?.content.slice(0, 160)} />
        <meta property="og:image" content={post?.data?.attributes.cover?.data?.attributes.url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="polski.dev" />
        <meta property="twitter:url" content={`https://www.polski.dev${slug}`} />
        <meta name="twitter:title" content={`${post?.data?.attributes?.title || "Dodaj tytuł"} | POLSKI.DEV`} />
        <meta name="twitter:description" content={post?.data?.attributes?.content.slice(0, 160)} />
        <meta name="twitter:image" content={post?.data?.attributes.cover?.data?.attributes.url} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
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
