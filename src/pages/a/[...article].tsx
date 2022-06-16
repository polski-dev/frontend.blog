import Head from "next/head";
import { NextPage } from "next";
import { kebabCase, deburr } from "lodash";
import { MenuGrade } from "components/templates/menu/component.menu.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { SquareShortArticle } from "components/atoms/animation/comonent.animation.index";
import { SectionArticleFull } from "components/templates/section/component.section.index";
import { articeWithOnlyTitleGetPreview, ArticeWithOnlyTitleType, articeFullByIdGetPreview, ArticeFullByIdType, articeGetListComments, ArticeGetListCommentsType } from "utils/database/database.graphQL.index";

const Article: NextPage<any> = ({ article, slug, comments }: { article: ArticeFullByIdType; slug: string; comments: ArticeGetListCommentsType }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog | POLSKI.DEV 👩‍💻👨‍💻</title>
      </Head>
      {!!article ? (
        <Container>
          <Row>
            <MenuGrade
              slug={slug}
              type="article"
              comments={comments.meta?.pagination.total || 0}
              views={article.data.article.data.attributes.views}
              id={parseInt(article?.data?.article?.data?.id)}
              gradeStats={article?.data?.article?.data?.attributes?.grades}
            />
            <Col xs={12} md={9}>
              <SectionArticleFull data={{ article, comments }} type="article" />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col xs={12} md={3}></Col>
            <Col xs={12} md={9} style={{ margin: "3rem 0" }}>
              <h5>Artykuł</h5>
              <SquareShortArticle style={{ marginTop: "0.75rem" }} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export async function getStaticProps({ params }: any): Promise<any> {
  // article full
  const article: ArticeFullByIdType = await articeFullByIdGetPreview(parseInt(params.article[0]));
  const comments: ArticeGetListCommentsType = await articeGetListComments(parseInt(params.article[0]), 1);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
      comments,
      slug: `/${params.article[0]}/${params.article[1]}`,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const countPage: ArticeWithOnlyTitleType = await articeWithOnlyTitleGetPreview(0);

  const allArticle: any[] = await Promise.all(
    new Array(countPage.data.article.meta.pagination.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const articeWithOnlyTitle: ArticeWithOnlyTitleType = await articeWithOnlyTitleGetPreview(i);
      return articeWithOnlyTitle?.data?.article?.data;
    })
  );

  return {
    paths: [].concat.apply([], allArticle).map((item: any) => `/a/${item.id}/${kebabCase(deburr(item.attributes.title.toLowerCase()))}`),
    fallback: true,
  };
}

export default Article;
