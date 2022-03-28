import Head from "next/head";
import { NextPage } from "next";
import useTag from "hooks/hooks.useTag";
import { kebabCase, deburr, parseInt } from "lodash";
import { MenuTag } from "components/templates/menu/component.menu.index";
import { InfoBoxTagPage } from "components/templates/boxInfo/component.boxInfo.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionArticleShortList } from "components/templates/section/component.section.index";
import { tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType, tagFullByIdGetPreview, TagFullByIdType } from "database/database.graphQL.index";

const TagPage: NextPage<any> = ({ tag, slug }: { tag: TagFullByIdType; slug: string }): JSX.Element => {
  const { statistics, statusSubscription } = useTag({ id: (!!tag?.data?.tag.data.id && parseInt(tag.data?.tag.data.id)) || 0, slug });

  console.log(statistics);

  console.log(statusSubscription);
  return (
    <>
      <Head>
        <title>{tag?.data?.tag?.data?.attributes?.title && tag?.data?.tag?.data?.attributes?.title} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuTag data={{ cover: tag?.data?.tag?.data?.attributes?.cover?.data?.attributes?.url }} />
          <Col xs={12} md={9}>
            <InfoBoxTagPage data={{ id: (tag?.data?.tag?.data?.id && parseInt(tag?.data?.tag.data.id)) || 0, title: tag?.data?.tag?.data?.attributes?.title || "Error", description: tag?.data?.tag?.data?.attributes?.description }} />
            {/*         <SectionArticleShortList data={content} userId={(user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0} type="allFromUser" /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  // tag full
  const tag: TagFullByIdType = await tagFullByIdGetPreview(parseInt(params.tag[0]));

  if (!tag) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tag,
      slug: `/t/${params.tag[0]}/${params.tag[1]}`,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const countPage: TagWithOnlyTitleType = await tagWithOnlyTitleAllGetPreviewList(0);

  const allTag: any[] = await Promise.all(
    new Array(countPage?.data?.tag.meta.pagination.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const tags: TagWithOnlyTitleType = await tagWithOnlyTitleAllGetPreviewList(i);

      return tags.data.tag.data;
    })
  );

  return {
    paths: [].concat.apply([], allTag).map(
      (tag: {
        id: string;
        attributes: {
          title: string;
        };
      }) => `/t/${tag?.id}/${kebabCase(deburr(tag?.attributes?.title.toLowerCase()))}`
    ),
    fallback: true,
  };
}

export default TagPage;
