import Head from "next/head";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MenuPrimary } from "components/templates/menu/index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid";
import { SectionContentShortList, SectionTagInfo } from "components/templates/section/index";
import { tagsFindBackEnd, TagsFindType, tagFindOneBackEnd, TagFindOneType } from "utils/query/tags/find";
import { TagType } from "types/database/types.database.tag";
import { slugFromTitle } from "utils/lib/utils.lib.slug";

const TagPage: NextPage<any> = ({ tag }: { tag?: TagFindOneType }): JSX.Element => {
  console.log(tag);
  return (
    <>
      <Head>
        <title>Tag | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            data={{
              title: "Filtruj",
              links: [
                { slug: "/", title: "Wszystko", count: 4 },
                { slug: "/article", title: "Artykuły", count: 3 },
                { slug: "/video", title: "Video", count: 4 },
              ],
            }}
          />
          <Col xs={12} md={9}>
            <SectionTagInfo data={{ tag }} />
            {/* <SectionContentShortList data={content} tagId={(!!tag?.data?.tag.data.id && parseInt(tag.data?.tag.data.id)) || 0} type={type} /> */}
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
      slug: `/t/${params.tag[0]}/${params.tag[1]}`,
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
  console.log([].concat.apply([], allTags));

  return {
    paths: [].concat.apply([], allTags).map((tag: TagType) => `/tag/${tag.id}/${slugFromTitle(tag.attributes.title)}`),
    fallback: true,
  };
}

export default TagPage;
