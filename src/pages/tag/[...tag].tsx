import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import useViews from "hooks/hooks.useViews";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { TagType } from "types/database/types.database.tag";
import { MenuPrimary } from "components/templates/menu/index";
import { MenuTagStats } from "components/templates/menu/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { tagCountState, tagCountFrontEnd } from "utils/query/tags/count";
import { postsFindBackEnd, PostsFindType } from "utils/query/posts/find";
import { SectionContentShortList, SectionTagInfo } from "components/templates/section/index";
import { tagsFindBackEnd, TagsFindType, tagFindOneBackEnd, TagFindOneType } from "utils/query/tags/find";

const TagPage: NextPage<any> = ({ tag, content, slug }: { tag?: TagFindOneType; content?: PostsFindType; slug: string }): JSX.Element => {
  useViews({ id: tag?.data?.id, typ: ContentEnum.tag });
  const [stats, setStats] = useState(tagCountState);

  useEffect(() => {
    (async (): Promise<void> => {
      tag?.data?.id && setStats(await tagCountFrontEnd({ id: tag?.data?.id || 0 }));
    })();
  }, [tag]);

  return (
    <>
      <Head>
        <title>{tag?.data?.attributes.title || "Add title for tag"} | POLSKI.DEV 👩‍💻👨‍💻</title>
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
            <SectionContentShortList data={{ typ: ContentEnum.tagPost, content, id: tag?.data?.id, title: `Pozsty zawietające #${tag?.data?.attributes.title}` }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  const tag: TagFindOneType = await tagFindOneBackEnd({ id: params.tag[0] });
  const content: PostsFindType = await postsFindBackEnd({ typ: ContentEnum.post, published: true, page: 1, tagId: tag.data?.id });

  return {
    props: {
      tag,
      content,
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
    paths: [].concat.apply([], allTags).map((tag: TagType) => `/tag/${tag.id}/${slugFromTitle(tag.attributes.title)}`),
    fallback: true,
  };
}

export default TagPage;
