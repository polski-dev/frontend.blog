import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import useTag from "hooks/hooks.useTag";
import { kebabCase, deburr, parseInt, identity } from "lodash";
import { MenuPrimary } from "components/templates/menu/component.menu.index";
import { InfoBoxTagPage } from "components/templates/boxInfo/component.boxInfo.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SectionArticleShortList } from "components/templates/section/component.section.index";
import { tagWithOnlyTitleAllGetPreviewList, TagWithOnlyTitleType, tagFullByIdGetPreview, TagFullByIdType } from "database/database.graphQL.index";
import { useEffect, useState } from "react";

const TagPage: NextPage<any> = ({ tag, slug, slugVideo, slugArticle, slugFollowuser }: { tag: TagFullByIdType; slug: string; slugVideo: string; slugArticle: string; slugFollowuser: string }): JSX.Element => {
  const { asPath } = useRouter();
  const [content, setContent] = useState();
  const { statistics, statusSubscription, subscriptionToggleGet } = useTag({ id: (!!tag?.data?.tag.data.id && parseInt(tag.data?.tag.data.id)) || 0, slug });
  useEffect(() => {
    console.log(asPath.split(slug + "#")[1]);
  }, [asPath, slug]);

  return (
    <>
      <Head>
        <title>wszystko z tagiem {tag?.data?.tag?.data?.attributes?.title && tag?.data?.tag?.data?.attributes?.title} | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      <Container>
        <Row>
          <MenuPrimary
            title="Filtruj"
            cover={tag.data?.tag.data.attributes.cover.data.attributes.url}
            data={[
              { slug, title: "Wszystko", quantity: statistics?.data?.addArticle && statistics?.data?.addVideo && statistics?.data?.followuser ? statistics?.data?.addArticle + statistics?.data?.addVideo + statistics?.data?.followuser : 0 },
              { slug: slugArticle, title: "Artykuły", quantity: statistics?.data?.addArticle ? statistics.data?.addArticle : 0 },
              { slug: slugVideo, title: "Video", quantity: statistics?.data?.addVideo ? statistics.data?.addVideo : 0 },
              { slug: slugFollowuser, title: "Obseruje", quantity: statistics?.data?.followuser ? statistics.data?.followuser : 0 },
            ]}
          />
          <Col xs={12} md={9}>
            <InfoBoxTagPage
              data={{
                id: (tag?.data?.tag?.data?.id && parseInt(tag?.data?.tag.data.id)) || 0,
                slug,
                title: tag?.data?.tag?.data?.attributes?.title || "Error",
                description: tag?.data?.tag?.data?.attributes?.description,
                statusSubscription,
                subscriptionToggleGet,
              }}
            />
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
  console.log(params);
  if (!tag) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tag,
      slug: `/t/${params.tag[0]}/${params.tag[1]}`,
      slugFollowuser: `/t/${params.tag[0]}/${params.tag[1]}#u`,
      slugVideo: `/t/${params.tag[0]}/${params.tag[1]}#v`,
      slugArticle: `/t/${params.tag[0]}/${params.tag[1]}#a`,
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
