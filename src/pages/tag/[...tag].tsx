import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { PostsFindType } from "utils/query/posts/find";
import { slugFromTitle } from "utils/lib/utils.lib.slug";
import { TagType } from "types/database/types.database.tag";
import { MenuPrimary } from "components/templates/menu/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { SectionContentShortList, SectionTagInfo } from "components/templates/section/index";
import { tagsFindBackEnd, TagsFindType, tagFindOneBackEnd, TagFindOneType } from "utils/query/tags/find";

const TagPage: NextPage<any> = ({ tag, slug }: { tag?: TagFindOneType; slug: string }): JSX.Element => {
  console.log(tag?.data);
  return (
    <>
      <Head>
        <title>{tag?.data?.attributes.title || "Addd title for tag"} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: `${slug}`, title: "Wszystko", count: 4 },
                { slug: `${slug}#article`, title: "Artykuły", count: 3 },
                { slug: `${slug}#video`, title: "Video", count: 4 },
              ],
              cover: { url: tag?.data?.attributes?.cover?.data?.attributes?.url || "", title: tag?.data?.attributes.title },
            }}
          />
          <Col xs={12} md={9}>
            <SectionTagInfo data={{ tag }} />
            {/* <SectionContentShortList /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  const tag: TagFindOneType = await tagFindOneBackEnd({ id: params.tag[0] });

  return {
    props: {
      tag,
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
