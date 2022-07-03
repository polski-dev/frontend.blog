import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import useViews from "hooks/hooks.useViews";
import { NextRouter, useRouter } from "next/router";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { TagType } from "types/database/types.database.tag";
import { MenuPrimary } from "components/templates/menu/index";
import { MenuTagStats } from "components/templates/menu/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { tagCountState, tagCountFrontEnd } from "utils/query/tags/count";
import { ComponentAnimationShortArticle } from "components/atoms/animation";
import { postsFindBackEnd, postsFindFrontEnd, PostsFindType } from "utils/query/posts/find";
import { SectionContentShortList, SectionTagInfo } from "components/templates/section/index";
import { tagsFindBackEnd, TagsFindType, tagFindOneBackEnd, TagFindOneType } from "utils/query/tags/find";

const TagPage: NextPage<any> = ({ tag, posts, slug }: { tag?: TagFindOneType; posts?: PostsFindType; slug: string }): JSX.Element => {
  const router: NextRouter = useRouter();
  useViews({ id: tag?.data?.id, typ: ContentEnum.tag });
  const [content, setContent] = useState(posts);
  const [stats, setStats] = useState(tagCountState);
  const [iAmWaitingForAnswer, setIAmWaitingForAnswer] = useState(false);

  useEffect(() => {
    (async (): Promise<void> => {
      tag?.data?.id && setStats(await tagCountFrontEnd({ id: tag?.data?.id || 0 }));
    })();
  }, [tag]);

  useEffect(() => {
    switch (router.asPath.split(slug + "#")[1]) {
      case "article":
        (async () => {
          setIAmWaitingForAnswer(true);
          const res: PostsFindType = await postsFindFrontEnd({ typ: ContentEnum.article, published: true, page: 1, tagId: tag?.data?.id });
          setContent(res);
          setIAmWaitingForAnswer(false);
        })();
        break;
      case "video":
        (async () => {
          setIAmWaitingForAnswer(true);
          const res: PostsFindType = await postsFindFrontEnd({ typ: ContentEnum.video, published: true, page: 1, tagId: tag?.data?.id });
          setContent(res);
          setIAmWaitingForAnswer(false);
        })();
        break;

      default:
        (async () => {
          setContent(posts);
        })();
        break;
    }
  }, [router, tag, slug, posts]);

  return (
    <>
      <Head>
        <title>{tag?.data?.attributes.title || "Add title for tag"} | POLSKI.DEV 👩‍💻👨‍💻</title>
        {tag?.data?.attributes?.description && <meta name="Description" content={tag?.data?.attributes?.description.slice(0, 160)} />}
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: `${slug}`, title: "Wszystko", count: stats?.data?.publishedPost || 0 },
                { slug: `${slug}#article`, title: "Artykuły", count: stats?.data?.publishedArticle || 0 },
                { slug: `${slug}#video`, title: "Video", count: stats?.data?.publishedVideo || 0 },
              ],
              cover: { url: tag?.data?.attributes?.cover?.data?.attributes?.url || "", title: tag?.data?.attributes.title },
            }}
          />
          <Col xs={12} md={9}>
            <SectionTagInfo data={{ tag }} />
            <MenuTagStats data={{ stats }} />
            {iAmWaitingForAnswer ? (
              new Array(10).fill(undefined).map((_: undefined, i: number): JSX.Element => {
                return <ComponentAnimationShortArticle key={i} />;
              })
            ) : (
              <SectionContentShortList data={{ typ: ContentEnum.tagPost, content, id: tag?.data?.id, title: `Pozsty zawietające #${tag?.data?.attributes.title}` }} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  const tag: TagFindOneType = await tagFindOneBackEnd({ id: params.tag[0] });
  const posts: PostsFindType = await postsFindBackEnd({ typ: ContentEnum.post, published: true, page: 1, tagId: tag.data?.id });

  return {
    props: {
      tag,
      posts,
      slug: `/tag/${params.tag[0]}/${params.tag[1]}`,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const count: TagsFindType = await tagsFindBackEnd({});

  const allTags: any[] = await Promise.all(
    new Array(count?.meta?.pagination?.pageCount || 1).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const tags: TagsFindType = await tagsFindBackEnd({ page: i });
      return tags?.data;
    })
  );

  return {
    paths: [].concat.apply([], allTags).map((tag?: TagType) => `/tag/${tag?.id}/${slugFromTitle(tag?.attributes?.title || "")}`),
    fallback: true,
  };
}

export default TagPage;
