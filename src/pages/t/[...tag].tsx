import Head from "next/head";
import { NextPage } from "next";
import { kebabCase, deburr, parseInt } from "lodash";
import { MenuUser } from "components/templates/menu/component.menu.index";
import { UserInfo } from "components/templates/user/component.user.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionArticleShortList } from "components/templates/section/component.section.index";
import { tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType, tagFullByIdGetPreview, TagFullByIdType } from "database/database.graphQL.index";

const TagPage: NextPage<any> = ({ tag, slug }: { tag: TagFullByIdType; slug: string }): JSX.Element => {
  console.log(tag);
  return (
    <>
      <Head>
        <title>{tag?.data?.tag?.data?.attributes?.title && tag?.data?.tag?.data?.attributes?.title} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <div style={{ width: "100%", height: "10rem", backgroundColor: "#5F6367" }}></div>
      <Container>
        <Row>
          {/* <MenuUser data={{ id: (user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0, learn: user?.data?.user?.data?.attributes?.learn || { data: [] }, skilks: user?.data?.user?.data?.attributes?.skilks || { data: [] } }} /> */}
          <Col xs={12} md={9}>
            {/* <UserInfo data={{ user, slug }} />
            <SectionArticleShortList data={content} userId={(user?.data?.user?.data?.id && parseInt(user?.data?.user?.data?.id)) || 0} type="allFromUser" /> */}
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
